import React from 'react';
import "@styles/Home.scss";

import banner from "@logos/doctores.png";

const Home = () => {
	return (
		<>
			<section className='banner'>
				<div>
					<h1 className=''>¡Bienvenido a Urgencias Rurales!</h1>
					<h5></h5>
				</div>
				<img src={banner} alt="doctores" className="doctores" />

			</section>
		</>
	);
}

export default Home;
