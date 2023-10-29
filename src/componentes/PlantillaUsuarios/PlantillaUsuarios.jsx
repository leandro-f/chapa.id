/* import React from 'react';
import { Link } from 'react-router-dom';

import './PlantillaUsuarios.css';

const PlantillaUsuarios = ({ usersData }) => {
  if (!usersData) {
    return <div>no se encontro empleado</div>;
  }

  return (
    <div className='cont_user'>
      <h1>TODOS LOS USUARIOS</h1>
      <div className='datos'>
        {usersData.map((user, index) => (
          <div className='user-card' key={index}>
            <img src={user.imagen} alt="Descripción de la imagen" />
            <h2>{user.nombre}</h2>
            <Link to={`/user/${user.nombre}`}>
              <button>Info</button>
            </Link>
          </div>
        ))} 
      </div>
    </div>
  );
}

export default PlantillaUsuarios;
 */


