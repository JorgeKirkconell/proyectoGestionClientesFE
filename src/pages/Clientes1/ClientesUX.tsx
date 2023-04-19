import { FC } from "react";
export interface ICliente {
  _id: string;
  identidad: string;
  nombre: string;
  apellido: string;
  email: string;
  genero?: string;
  fechaNac?: Date;
  notas?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IClientesUXProps {
  clientes: any[];
  isLoading: boolean;
  error: string;
  onViewClienteClick: (id: string) => void;
  onAddClick: () => void;
}

export const ClientesUX: FC<IClientesUXProps> = ({
  clientes,
  isLoading,
  error,
  onViewClienteClick,
  onAddClick,
}) => {
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <a onClick={onAddClick}>Add</a>
      {clientes &&
        clientes.map((cliente: ICliente) => (
          <ClienteUX
            key={cliente._id}
            _id={cliente._id}
            identidad={cliente.identidad}
            nombre={cliente.nombre}
            apellido={cliente.apellido}
            email={cliente.email}
            onViewClienteClick={function (id: string): void {
              onViewClienteClick(id);
            }}
          />
        ))}
    </>
  );
};

export interface IClienteUXProps {
  _id: string;
  identidad: string;
  nombre: string;
  apellido: string;
  email: string;
  onViewClienteClick: (id: string) => void;
}

export const ClienteUX: FC<IClienteUXProps> = ({
  _id,
  identidad,
  nombre,
  apellido,
  email,
  onViewClienteClick,
}) => {
  return (
    <div
      data-id={_id}
      onClick={() => {
        onViewClienteClick(_id);
      }}
    >
      <span>{identidad}</span>
      <span>{nombre}</span>
      <span>{apellido}</span>
      <span>{email}</span>
    </div>
  );
};
