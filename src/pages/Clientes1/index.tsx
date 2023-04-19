import Page from "@/components/Page";
import { ClientesUX } from "./ClientesUX";
import { EmpresaFormUX } from "../Empresas/EmpresaFormUX";
import { FC, useState } from "react";
import {
  useGetAllQuery,
  useAddNewMutation,
  useGetByIdQuery,
} from "@/store/services/clientesServices";
import { useNavigate, useParams } from "react-router-dom";
import { ClienteFormUX } from "./ClienteFormUX";

export const Clientes: FC = () => {
  const { data: clientes, isLoading, error } = useGetAllQuery([]);
  const navigate = useNavigate();
  return (
    <Page>
      <h1>Clientes</h1>
      <ClientesUX
        clientes={clientes}
        isLoading={isLoading}
        error={error?.toString() || ""}
        onViewClienteClick={(id: string): void => {
          navigate(`/clientes/${id}`);
        }}
        onAddClick={(): void => {
          navigate(`/clientes/new`);
        }}
      />
    </Page>
  );
};

export const ClienteForm: FC = () => {
  const navigate = useNavigate();
  const [identidad, setIdentidad] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [genero, setgenero] = useState("");
  const [fechaNac, setfechaNac] = useState("");
  const [notas, setnotas] = useState("");
  const [newCliente] = useAddNewMutation();

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    switch (name) {
      case "identidad":
        setIdentidad(value);
        break;
      case "nombre":
        setNombre(value);
        break;
      case "apellido":
        setApellido(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "genero":
        setgenero(value);
        break;
      case "fechaNac":
        setfechaNac(value);
        break;
      case "notas":
        setnotas(value);
        break;
      default:
        break;
    }
  };
  const onClickHandler = async () => {
    const result = await newCliente({
      identidad,
      nombre,
      apellido,
      email,
    }).unwrap();
    console.log(result);
    navigate("/clientes");
  };
  return (
    <ClienteFormUX
      identidad={identidad}
      nombre={nombre}
      apellido={apellido}
      email={email}
      genero={genero}
      fechaNac={fechaNac}
      notas={notas}
      onChangeHandler={onChangeHandler}
      onClickHandler={onClickHandler}
      onSelectChangeHandler={onClickHandler}
    />
  );
};

export const ClienteView: FC = () => {
  const { id = "" } = useParams();
  const { data: cliente, isLoading, error } = useGetByIdQuery(id);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error?.toString() || ""}</div>}
      {cliente && <div>{JSON.stringify(cliente)}</div>}
    </>
  );
};
