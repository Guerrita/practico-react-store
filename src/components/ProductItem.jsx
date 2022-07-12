import React, {useContext} from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext'

import cartImage from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {
	const {addToCart} = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
		{console.log(product)}
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={ () => handleClick(product)}>
					<img src={cartImge} alt="Add to cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
