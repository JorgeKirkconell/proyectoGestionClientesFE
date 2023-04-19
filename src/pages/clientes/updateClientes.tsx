import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { RootState } from '@/store/store';
import { Card } from "../../components/Card";
const { VITE_APP_API_BASE_URL, VITE_APP_API_KEY } = import.meta.env;


interface Cliente {
  _id: string;
  identidad: number;
  nombre: string;
  apellido: string;
  email: string;
  genero: string;
  fechaNac: string;
  notas: string;
}

const ListaClientes: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [error, setError] = useState<string>('');
  const infoStr = localStorage.getItem("reduxState");
  const apikey = VITE_APP_API_KEY;
  let token = "";
  if (infoStr) {
    const infoObj = JSON.parse(infoStr);
    token = infoObj.sec.token;
  };
  const config = {
    headers: {
      'apikey': apikey,
      'Authorization': `Bearer ${token}`
    }
  };
  //console.log(token);

  //const token = (getState() as RootState).sec.token;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/clientes/all', config);
        setClientes(response.data);
      } catch (error) {
        setError('Datos no obtenidos');
      }
    };
    fetchData();
  }, []);

  const editarCliente = async (cliente: Cliente) => {
    try {
      await axios.put(`http://localhost:3001/clientes/upd/${cliente._id}`, cliente, config);
      // Eliminar el cliente de la lista local
      setClientes(clientes.map(c => c._id === cliente._id ? cliente : c));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <h3>Identidad  - Nombre Apellido -  Email  - Genero - Fecha nacimiento - Notas</h3>
      <hr></hr>


      {clientes.map(cliente => (
        <Card>
          <li key={cliente._id}>
            <p>Identidad: {cliente.identidad}   <br></br> Nombre: {cliente.nombre} {cliente.apellido} <br></br>  Correo: {cliente.email}  <br></br> Genero: {cliente.genero} <br></br> FechaNac: {cliente.fechaNac} <br></br> Notas: {cliente.notas} <br />     <button onClick={() => editarCliente(cliente._id)}>Eliminar</button></p>

          </li>
        </Card>
      ))}

    </div>

  );
};

const App: React.FC = () => {
  return (

    <div>
      <h1>Eliminar clientes</h1>
      <ListaClientes />
      <Link to="/">Regresar al menú principal</Link>
    </div>
  );
};

export default App;
