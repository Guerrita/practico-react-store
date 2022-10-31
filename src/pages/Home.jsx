import React from 'react';
import "@styles/Home.scss";

import banner from "@logos/doctores.png";

import patients from "@icons/patients-icon.png";
import doctors from "@icons/doctors-icon.png";
import more from "@icons/more-icon.png";

const Home = () => {
	return (
		<>
			<section className='banner'>
				<div>
					<h1 className=''>¡Bienvenido a Urgencias Rurales!</h1>
					<h5>Con este sistema podras gestionar todo lo relacionado con el sistema de urgencias de tu centro hospitalario </h5>
				</div>
				<img src={banner} alt="doctores" className="banner-image" />
			</section>
			<section className='information-cards'>
				<article className='card'>
					<img src={patients} className="card-icon" />
					<h4>Pacientes</h4>
					<p>Podrás administrar a todos los pacientes que han ingresado y que ingresarán a urgencias</p>
				</article>
				<article className='card'>
					<img src={doctors} className="card-icon" />
					<h4>Médicos</h4>
					<p>Tendrás una lista con los médicos que estan actualmente trabajando dentro del sistema de urgencias</p>
				</article>
				<article className='card'>
					<img src={more} className="card-icon" />
					<h4>Mucho mas</h4>
					<p>Tendrás a tu alcance toda la información y funcionalidades que puedas llegar a requerir</p>
				</article>
			</section>
		</>
	);
}

export default Home;
