import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const ProductDetails = ({ props }) => {
	const context = useContext(AppContext);

	const { productId } = useParams();
	const thisProduct = context.products.find(
		(product) => product.id === productId
	);
	const currentProduct = context.products[productId - 1];

	return (
		<AppContext.Consumer>
			{(context) => (
				<section className="product-details">
					<div className="container mx-auto">
						<div className="grid  md:grid-cols-2 gap-16">
							<div className="product-image">
								<img
									src={currentProduct.thumb}
									alt={currentProduct.alt}
								/>
							</div>
							<div className="product-detail">
								<h1>{currentProduct.name}</h1>
								<span className="price">
									${currentProduct.price.toFixed(2)}
								</span>
								<h6>Description</h6>
								<p>{currentProduct.info}</p>

								<h6>Model Number</h6>
								<p className="product-desc">
									{currentProduct.modelNumber}
								</p>

								<h6>Weight</h6>
								<p className="product-desc">
									{currentProduct.weight}
								</p>

								<h6>Size</h6>
								<p className="product-desc">
									{currentProduct.size}
								</p>
								<div className="cta">
									<button
										className="btn btn-primary"
										onClick={context.addProductToCart.bind(
											thisProduct,
											currentProduct
										)}
									>
										Add to Cart
									</button>
									<Link
										to="/"
										className="btn btn-outline btn-primary"
									>
										Back to Home
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</AppContext.Consumer>
	);
};

export default ProductDetails;
