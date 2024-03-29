import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import AddPatient from '../pages/AddPatient';
import Patients from '../pages/Patients';
import AddDoctor from '../pages/AddDoctor';
import Doctors from '../pages/Doctors';
import CreateAccount from '../pages/CreateAccount';
import NotFound from '../pages/NotFound';
import '@styles/global.css';
import AppContext from '../context/AppContext';
import AddConsultation from '../pages/AddConsultation';
import AddMedicine from '../pages/AddMedicine';
//import useInitialState from '../hooks/useInitialState'

const App = () => {
	//const initialState = useInitialState();
	return (
		<AppContext.Provider >
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/password-recovery" component={PasswordRecovery} />
					<Route exact path="/new-password" component={NewPassword} />
					<Route exact path="/account" component={MyAccount} />
					<Route exact path="/sign-up" component={CreateAccount} />
					<Route exact path="/patients" component={Patients} />
					<Route exact path="/doctors" component={Doctors} />
					<Route exact path="/add-patient" component={AddPatient} />
					<Route exact path="/add-doctor" component={AddDoctor} />
					<Route exact path="/add-consultation" component={AddConsultation} />
					<Route exact path="/add-medicine" component={AddMedicine} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
