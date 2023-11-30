import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseconfig';
import "./PerfilUsuario.css"

const PerfilUsuario = () => {
  const { nombre } = useParams();
  const [user, setUser] = useState({});

  const obtenerUsuario = async () => {
    const usuariosCollection = collection(db, 'usuarios');
    const q = query(usuariosCollection, where('nombre', '==', nombre));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    }
 
  };

  useEffect(() => {
    obtenerUsuario();
  }, [nombre]);


  if (Object.keys(user).length === 0) {
    return null; 
  }

  return (
    <div className="cont_datos">
      <div className="cont1">
        <div>
          <img src={user.imagen} alt="Descripción de la imagen" />
          <h2>{user.nombre}</h2>
          <p><b>DNI:</b> {user.dni}</p>
          <p><b>Cargo:</b> {user.fechaNacimiento}</p>
          {/* <p>Dirección: {user.direccion}</p> */}
        </div>
        <div className='logo-container'>
          <img className='logo' src="/imagenes/sifa_logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;

