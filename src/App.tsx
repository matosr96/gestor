import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

interface UserProps {
  nombre: string;
  email: string;
  codigoUsuario: string;
}



function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/centrologistico/Usuarios/verTodosUsuarios")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Código de Usuario</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: UserProps, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.email}</td>
              <td>{item.codigoUsuario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
