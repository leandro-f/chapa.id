import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseconfig';
import "./PerfilUsuario.css"

const PerfilUsuario = () => {
  const { nombre } = useParams();
  const [user, setUser] = useState({}); // Inicializa user con un objeto vacío

  const obtenerUsuario = async () => {
    const usuariosCollection = collection(db, 'usuarios');
    const q = query(usuariosCollection, where('nombre', '==', nombre));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    }
    // No necesitas un else aquí, porque user ya está inicializado con un objeto vacío
  };

  useEffect(() => {
    obtenerUsuario();
  }, [nombre]);

  // Comprueba si user es un objeto vacío antes de renderizar
  if (Object.keys(user).length === 0) {
    return null; // No renderiza nada si user está vacío
  }

  return (
    <div className="cont_datos">
      <div className="cont1">
        <div>
          <img src={user.imagen} alt="Descripción de la imagen" />
          <h2>{user.nombre}</h2>
          <p>DNI: {user.dni}</p>
          <p>Fecha de nacimiento: {user.fechaNacimiento}</p>
          <p>Dirección: {user.direccion}</p>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;

