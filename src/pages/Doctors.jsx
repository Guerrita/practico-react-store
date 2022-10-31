import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import "@styles/Doctors.scss";


import banner from "@logos/doctor-heart.png";


const Doctors = () => {

  return (
    <section className='banner'>
      <div>
        <h2 className=''>¡Bienvenido a la sección de Médicos!</h2>
        <h5>Acá podrás observar todos los médicos que trabajan en urgencias y podrás agregar más</h5>
        <NavLink to="/add-doctor"><button className="primary-button">Agregar médico</button></NavLink>
      </div>
      <img className="banner-image" alt="Doctor y Corazon" src={banner}  />

    </section>
  );
};

export default Doctors;
