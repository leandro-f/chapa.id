import "./Inicio.css"
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseconfig';
import { Link } from 'react-router-dom';
const Inicio = () => {
  const [usuarios, setUsuarios] = useState([]);

  const obtenerUsuarios = async () => {
    const usuariosCollection = collection(db, 'usuarios');
    const querySnapshot = await getDocs(usuariosCollection);
    const usuariosData = querySnapshot.docs.map((doc) => doc.data());
    setUsuarios(usuariosData);
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <div className="cont_inicio">
      <h1>Usuarios</h1>
      <div className="user-list">
        {usuarios.map((usuario, index) => (
          <div key={index} className="user-card">
            <img src={usuario.imagen} alt="Descripción de la imagen" />
            <Link to={`/user/${usuario.nombre}`}> {/* Usamos Link en lugar de <a> */}
              <button>Info</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inicio;


