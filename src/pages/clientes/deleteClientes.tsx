import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { RootState } from '@/store/store';
import { Card } from "../../components/Card";
const { VITE_APP_API_BASE_URL, VITE_APP_API_KEY } = import.meta.env;


interface Cliente {
  _id: string;
=======

import { Card } from "../../components/Card";

interface Cliente {
    _id: string;
>>>>>>> 37b50dc7a06350ef9d268927eaa010c077286df9
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
<<<<<<< HEAD
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

=======
>>>>>>> 37b50dc7a06350ef9d268927eaa010c077286df9

  useEffect(() => {
    const fetchData = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get('http://localhost:3001/clientes/all', config);
=======
        const response = await axios.get('http://localhost:3001/clientes/all');
>>>>>>> 37b50dc7a06350ef9d268927eaa010c077286df9
        setClientes(response.data);
      } catch (error) {
        setError('Datos no obtenidos');
      }
    };
    fetchData();
  }, []);

  const eliminarCliente = async (id: string) => {
    try {
      const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este cliente?');
      if (confirmacion) {
<<<<<<< HEAD
        await axios.delete(`http://localhost:3001/clientes/del/${id}`, config);
=======
        await axios.delete(`http://localhost:3001/clientes/del/${id}`);
>>>>>>> 37b50dc7a06350ef9d268927eaa010c077286df9
        // Eliminar el cliente de la lista local
        setClientes(clientes.filter(cliente => cliente._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <h3>Identidad  - Nombre Apellido -  Email  - Genero - Fecha nacimiento - Notas</h3>
      <hr></hr>
<<<<<<< HEAD


      {clientes.map(cliente => (
        <Card>
          <li key={cliente._id}>
            <p>Identidad: {cliente.identidad}   <br></br> Nombre: {cliente.nombre} {cliente.apellido} <br></br>  Correo: {cliente.email}  <br></br> Genero: {cliente.genero} <br></br> FechaNac: {cliente.fechaNac} <br></br> Notas: {cliente.notas} <br />     <button onClick={() => eliminarCliente(cliente._id)}>Eliminar</button></p>

          </li>
        </Card>
      ))}

    </div>

=======
      
      
      {clientes.map(cliente => (
        <Card>
        <li key={cliente._id}>
          <p>Identidad: {cliente.identidad}   <br></br> Nombre: {cliente.nombre} {cliente.apellido} <br></br>  Correo: {cliente.email}  <br></br> Genero: {cliente.genero} <br></br> FechaNac: {cliente.fechaNac} <br></br> Notas: {cliente.notas} <br />     <button onClick={() => eliminarCliente(cliente._id)}>Eliminar</button></p>
          
        </li>
        </Card>
      ))}
    
    </div>
    
>>>>>>> 37b50dc7a06350ef9d268927eaa010c077286df9
  );
};

const App: React.FC = () => {
  return (
<<<<<<< HEAD

=======
    
>>>>>>> 37b50dc7a06350ef9d268927eaa010c077286df9
    <div>
      <h1>Eliminar clientes</h1>
      <ListaClientes />
      <Link to="/">Regresar al menú principal</Link>
    </div>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 37b50dc7a06350ef9d268927eaa010c077286df9
