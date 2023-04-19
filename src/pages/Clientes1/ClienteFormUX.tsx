import { FC } from "react";
import Page from "@/components/Page";
import { Field, FieldSelect } from "@/components/InputField";
import { PrimaryButton } from "@/components/Buttons";

interface IClientesFormUXProps {
  identidad: string;
  nombre: string;
  apellido: string;
  email: string;
  genero: string;
  fechaNac: string;
  notas: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onClickHandler: () => void;
}
export const ClienteFormUX: FC<IClientesFormUXProps> = ({
  identidad,
  nombre,
  apellido,
  email,
  genero,
  fechaNac,
  notas,
  onChangeHandler,
  onClickHandler,
  onSelectChangeHandler,
}) => {
  return (
    <Page useAbsoluteCenter={true} pageTitle="Clientes">
      <div className="cliente-ux">
        <Field
          name="identidad"
          id="identidad"
          type="text"
          labelText="Identidad"
          placeholder="Número de Identidad"
          onChange={onChangeHandler}
          value={identidad}
        />
        <Field
          name="nombre"
          id="nombre"
          type="text"
          labelText="Nombre"
          placeholder="Primer y Segundo Nombre"
          onChange={onChangeHandler}
          value={nombre}
        />
        <Field
          name="apellido"
          id="apellido"
          type="text"
          labelText="Apellido"
          placeholder="Primer y Segundo Apellido"
          onChange={onChangeHandler}
          value={apellido}
        />
        <Field
          name="email"
          id="email"
          type="email"
          labelText="Correo Electrónico"
          placeholder="Correo Electrónico"
          onChange={onChangeHandler}
          value={email}
        />
        <PrimaryButton onClick={onClickHandler}>Añadir Cliente</PrimaryButton>
      </div>
    </Page>
  );
};
