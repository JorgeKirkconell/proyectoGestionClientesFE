import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Card } from "../../components/Card";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/clientes/all');
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
        await axios.delete(`http://localhost:3001/clientes/del/${id}`);
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
      
      
      {clientes.map(cliente => (
        <Card>
        <li key={cliente._id}>
          <p>Identidad: {cliente.identidad}   <br></br> Nombre: {cliente.nombre} {cliente.apellido} <br></br>  Correo: {cliente.email}  <br></br> Genero: {cliente.genero} <br></br> FechaNac: {cliente.fechaNac} <br></br> Notas: {cliente.notas} <br />     <button onClick={() => eliminarCliente(cliente._id)}>Eliminar</button></p>
          
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

export default App;
