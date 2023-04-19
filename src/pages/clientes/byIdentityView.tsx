import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Props {
  client: {
    _id: string;
    identidad: string;
  nombre: string;
  apellido: string;
  email: string;
  genero?: string;
  fechaNac?: string;
  notas?: string;
  } | null;
  error: string | null;
}

interface Client {
  _id: string;
  identidad: string;
  nombre: string;
  apellido: string;
  email: string;
  genero?: string;
  fechaNac?: string;
  notas?: string;
}

const useClientByIdentity = (identity: string) => {
  const [client, setClient] = useState<Client | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/clientes/byid/${identity}`);
      const data = response.data;
      setClient(data);
      setError(null);
    } catch (error) {
      setClient(null);
      setError('Cliente no existe');
    }
  };

  return { client, error, fetchData };
};

const MyComponent = () => {
  const [identity, setIdentity] = useState('');
  const [emptyError, setEmptyError] = useState<string | null>(null);
  const { client, error, fetchData } = useClientByIdentity(identity);

  const handleSearch = () => {
    if (!identity) {
      setEmptyError('Debes ingresar un identificador');
    } else {
      setEmptyError(null);
      fetchData();
    }
  };

  const ByIdentityView: React.FC<Props> = ({ client, error }) => {
    if (error) {
      return <div>{error}</div>;
    }

    if (!client) {
      return <div>Esperando identificador</div>;
    }

    return (
      <div>
        <h3>Identidad  - Nombre Apellido -  Email  - Genero - Fecha nacimiento - Notas</h3>
        <hr></hr>
        <p>{client.identidad}  - {client.nombre} {client.apellido} -  {client.email}  - {client.genero} - {client.fechaNac} - {client.notas}</p>
        
      </div>
    );
  };

  return (
    <div>
      <h1>Cliente por Identificador</h1>
      <input placeholder='Ingresa identificador' type="text" value={identity} onChange={(e) => setIdentity(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
      {emptyError && <div>{emptyError}</div>}
      <ByIdentityView client={client} error={error} />
      <Link to="/">Regresar al menú principal</Link>
    </div>
  );
};

export default MyComponent;
