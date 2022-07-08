import React from 'react';
import '../styles/global.css';
import Layout from '../containers/Layout'
import Login from '../containers/Login'
import { RecoveryPassword } from '../containers/RecoveryPassword';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>

					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/recovery-password' component={RecoveryPassword} />
					<Route component={NotFound} />

				</Switch>
			</Layout>
		</BrowserRouter>

	);
}

export default App;
