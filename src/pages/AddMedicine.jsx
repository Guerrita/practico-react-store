import React, { useState } from 'react';

import '@styles/CreateForm.scss';

const AddMedicine = () => {
  const url = "";
	const [medicine, setMedicine] = useState({
		id: "",
		name: "",
		serial: "",
		type: "",
		lab: "",
		dose: "",
		address: "",
	})

	function handleData(event) {
		const newMedicine = { ...medicine };
		newMedicine[event.target.id] = event.target.value;
		setMedicine(newMedicine)
		console.log(newMedicine);
	}

  return (
    <div className="CreateForm">
      <div className="CreateForm-container">
        <h1 className="title">Añadir Medicamentos</h1>
        <form action="/" className="form">
          <div>
            <label for="name" className="label">Nombre Medicamento</label>
            <input required onChange={(event) => handleData(event)} type="text" id="name" placeholder="Ingresar medicamento" className="input input-name" />
            <label for="serial" className="label">Serial</label>
            <input required onChange={(event) => handleData(event)} type="text" id="serial" placeholder="Codigo serial" className="input input-serial" />
            <label for="type" className="label">Tipo</label>
            <input required onChange={(event) => handleData(event)} type="text" id="type" placeholder="Tipo medicamento" className="input input-type" />
            <label for="lab" className="label">Laboratorio</label>
            <input required onChange={(event) => handleData(event)} type="text" id="lab" placeholder="Laboratorio" className="input input-lab" />
            <label for="price" className="label">Valor Medicamento</label>
            <input required onChange={(event) => handleData(event)} type="number" id="price" placeholder="precio" className="input input-price" />
            <label for="dose" className="label">Dosis</label>
            <input required onChange={(event) => handleData(event)} type="text" id="dose" placeholder="Dosis resetada" className="input input-dose" />
            <label for="address" className="label">Direccion</label>
            <input onChange={(event) => handleData(event)}type="text" id="address" placeholder="Direccion" className="input input-address" />
          </div>
          <input type="submit" value="Create" className="primary-button login-button" />
        </form>
      </div>
    </div>
  );
}

export default AddMedicine; 