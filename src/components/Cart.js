import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const Cart = (props) => {
	const context = useContext(AppContext);

	const cartTotal = context.cart.reduce(
		(total, curTotal) => {
			return total + curTotal.price;
		},
		0
	);

	return (
		<section className="cart">
			<div className="container mx-auto">
				{/* <h1>Cart Page</h1> */}
				{context.cart.length <= 0 && (
					<div className="cart-empty">
						<h1 className="white margin-bottom-extrasmall">
							Cart is empty<span>.</span>
						</h1>
						<p className="heading left grey-light margin-bottom">
							Add products from the home page and come back
							again.
						</p>
						<Link to="/" className="btn btn-black">
							Home
						</Link>
					</div>
				)}
				{context.cart.length > 0 && (
					<React.Fragment>
						<div className="table-wrapper">
							<div className="flex flex-col">
								<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
									<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
										<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
											<table className="min-w-full divide-y divide-gray-200">
												<tbody>
													{context.cart.map((cartItem) => (
														<tr key={cartItem.id}>
															<td className="px-6 py-4 whitespace-nowrap">
																<div className="flex items-center">
																	<div className="flex-shrink-0 h-10 w-10">
																		<p>
																			#
																			{context.cart.indexOf(
																				cartItem
																			) + 1}
																		</p>
																	</div>
																</div>
															</td>
															<td className="px-6 py-4 whitespace-nowrap">
																<img
																	className="thumbnail"
																	alt={cartItem.alt}
																	src={cartItem.thumb}
																></img>
															</td>
															<td className="px-6 py-4 whitespace-nowrap">
																<div className=" text-gray-900">
																	{cartItem.name}
																</div>
															</td>
															<td className="px-6 py-4 whitespace-nowrap">
																<div className=" text-gray-900">
																	${cartItem.price}
																</div>
															</td>
															<td className="px-6 py-4 whitespace-nowrap">
																<div className=" text-gray-900">
																	{cartItem.modelNumber}
																</div>
															</td>
															<td className="px-6 py-4 whitespace-nowrap">
																<div className=" text-gray-900">
																	{cartItem.weight}
																</div>
															</td>
															<td className="px-6 py-4 whitespace-nowrap">
																<div className=" text-gray-900">
																	{cartItem.size}
																</div>
															</td>
															<td>${cartItem.price}</td>
															<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
																<button
																	onClick={context.removeProductFromCart.bind(
																		this,
																		cartItem.id
																	)}
																	href="#"
																	className="btn btn-red delete"
																>
																	Delete
																</button>
															</td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="summary shadow">
							<h6>
								<b>SUBTOTAL: </b> ${cartTotal}
							</h6>
							<hr />
							<h6>
								<b>GRAND TOTAL: </b>
								<span className="total"> ${cartTotal}</span>
							</h6>
						</div>
					</React.Fragment>
				)}
			</div>
		</section>
	);
};

export default Cart;
