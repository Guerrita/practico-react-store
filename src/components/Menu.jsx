import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/">Mi cuenta</a>
				</li>
				<li>
					<a href="/">Cerrar sesión</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
