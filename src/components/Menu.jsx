import React from 'react';
import '@styles/Menu.scss';
import { NavLink } from "react-router-dom";

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
				<NavLink to="/account">Mi cuenta</NavLink>
				</li>
				<li>
					<NavLink to="/sign-up">Cerrar sesión</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
