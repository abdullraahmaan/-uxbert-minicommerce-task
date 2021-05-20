import React from "react";
import Product from "./Product";

const Products = () => {
	return (
		<section className="products">
			<div className="container mx-auto">
				<h2>Check our products.</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Beatae quos rem, error facilis
					eveniet perspiciatis tempora totam animi
					doloribus.
				</p>

				<div className="products-wrapper">
					<Product></Product>
				</div>
			</div>
		</section>
	);
};

export default Products;
