
const CreateAccount = () => {
	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Nombre</label>
						<input type="text" id="name" placeholder="Teff" className="input input-name" />
            <label for="name" className="label">Apellidos</label>
            
						<input type="text" id="name" placeholder="Teff" className="input input-name" />
						<label for="email" className="label">Email</label>
						<input type="text" id="email" placeholder="medico@example.com" className="input input-email" />
						<label for="password" className="label">Password</label>
						<input type="password" id="password" placeholder="*********" className="input input-password" />
					</div>
					<input type="submit" value="Create" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default CreateAccount; 