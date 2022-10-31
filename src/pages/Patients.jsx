import React, { useEffect, useState } from "react";
import "@styles/Patients.scss";
import { NavLink } from "react-router-dom";


import banner from "@logos/Doctor measuring blood pressure to male patient.png";



const Patients = () => {
  //let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  //let allItems = useGetItems(api)
  //let [fetchedData, updateFetchedData] = useState([]);
  //let { info, results } = allItems;

  return (
    <section className='banner'>
      <div>
        <h2 className=''>¡Bienvenido a la sección de pacientes!</h2>
        <h5>Acá podrás observar todos los pacientes que se han atendido y podras agregar más</h5>
        <NavLink to="/add-patient"><button className="primary-button">Agregar paciente</button></NavLink>
      </div>
      <img className="banner-image" alt="Pacientes" src={banner}  />

    </section>
  );
};

export default Patients;
