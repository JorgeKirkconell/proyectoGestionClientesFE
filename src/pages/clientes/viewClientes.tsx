import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHref } from 'react-router-dom';
import { Card } from "../../components/Card";
import { Link } from 'react-router-dom';

interface Cliente {
  id: number;
  identidad: string;
  nombre: string;
  apellido: string;
  email: string;
  genero?: string;
  fechaNac?: string;
  notas?: string;
}

const ClientesView: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/clientes/all');
        setClientes(response.data);
      } catch (error) {
        console.log(error);
        setError('Datos no obtenidos');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de clientes</h1>
      {error && <p>{error}</p>}
      
      <hr></hr>
      {clientes.map((cliente) => (
        <Card>
        <div key={cliente.id}>
          <p>Identidad: {cliente.identidad}   <br></br> Nombre: {cliente.nombre} {cliente.apellido} <br></br>  Correo: {cliente.email}  <br></br> Genero: {cliente.genero} <br></br> FechaNac: {cliente.fechaNac} <br></br> Notas: {cliente.notas}</p>
         
        </div>
        </Card>
        
      ))}
       <Link to="/">Regresar al menú principal</Link>
    </div>
    
  );
};

export default ClientesView;
