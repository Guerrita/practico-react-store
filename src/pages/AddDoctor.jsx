import React, { useState } from 'react';
import '@styles/CreateForm.scss';

const AddDoctor = () => {
	const url = "";
	const [doctor, setDoctor] = useState({
    id: "",
		name: "",
		lastname: "",
		birthdate: "",
		cellphone: "",
		city: "",
		municipality: "",
		address: "",
		RH: "",
		specialty: "",
		schedule: "",
	}) 

function handleData(event) {
	const newDoctor = {...doctor};
	newDoctor[event.target.id] = event.target.value;
	setDoctor(newDoctor)
	console.log(newDoctor);
}


	return (
		<div className="CreateForm">
			<div className="CreateForm-container">
				<h1 className="title">Agregar Médico</h1>
				<form action="/" className="form">
					<div>
						<label for="id" className="label">Cédula</label>
						<input required onChange={(event) => handleData(event)} type="number" id="id" placeholder="Cédula" className="input input-id" />
						<label for="name" className="label">Nombre</label>
						<input required onChange={(event) => handleData(event)} type="text" id="name" placeholder="Nombres" className="input input-name" />
            <label for="lastname" className="label">Apellidos</label>
						<input required onChange={(event) => handleData(event)} type="text" id="lastname" placeholder="Apellidos" className="input input-lastname" />
						<label for="birthdate" className="label">Fecha de nacimiento</label>
						<input required onChange={(event) => handleData(event)} type="date" id="birthdate" placeholder="Fecha de nacimiento" className="input input-birthdate" />
						<label for="cellphone" className="label">Celular</label>
						<input required onChange={(event) => handleData(event)} type="number" id="cellphone" placeholder="Celular" className="input input-cellphone" />
						<label for="city" className="label">Ciudad</label>
						<input required onChange={(event) => handleData(event)} type="tel" id="city" placeholder="Ciudad" className="input input-city" />
						<label for="municipality" className="label">Municipio</label>
						<input required type="text" id="municipality" placeholder="Municipio" className="input input-municipality" />
						<label for="address" className="label">Direccion</label>
						<input required onChange={(event) => handleData(event)} type="text" id="address" placeholder="Direccion" className="input input-address" />
						<label for="RH" className="label">RH</label>
						<select required onChange={(event) => handleData(event)} id="RH" className="input input-RH" >
							<option value="O-">O-</option>
							<option value="O+">O+</option>
							<option value="A-">A-</option>
							<option value="A+">A+</option>
							<option value="B-">B-</option>
							<option value="B+">B+</option>
							<option value="AB-">AB-</option>
							<option value="AB+">AB+</option>
						</select>
						<label for="specialty" className="label">Especialidad</label>
						<input onChange={(event) => handleData(event)} type="text" id="specialty" placeholder="Especialidad" className="input input-specialty" />
						<label for="schedule" className="label">Horario</label>
						<textarea onChange={(event) => handleData(event)} type="text" id="schedule" placeholder="Horario" className="input input-schedule" />
					</div>
					<input type="submit" value="Crear Paciente" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default AddDoctor; 