import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const Product = (props) => {
	const context = useContext(AppContext);
	return (
		<>
			{context.products.map((product) => (
				<div className="product-card" key={product.id}>
					<div className="product-image">
						<img src={product.thumb} alt={product.alt} />
					</div>
					<div className="product-content">
						<h3 className="product-name">{product.name}</h3>
						<p className="product-desc">{product.desc}</p>
					</div>
					<Link
						to={`/products/${product.id}`}
						className="product-link"
					></Link>
				</div>
			))}
		</>
	);
};

export default Product;
