import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import brandLogo from "../images/logo.png";
import { AiOutlineShopping } from "react-icons/ai";
import AppContext from "../context/AppContext";

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const context = useContext(AppContext);
	const cartItemNumber = context.cart.length;

	return (
		<header className="main-header">
			<nav className="container mx-auto bg-white">
				<div className="nav-wrapper mx-auto">
					<div className="flex items-center align-middle justify-between">
						<div className="flex items-center">
							<div className="brand flex-shrink-0">
								<Link to="/">
									<img
										src={brandLogo}
										className="brand-image"
										alt=""
									/>
								</Link>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										to="/"
										className=" hover:bg-white-700 text-black px-3 py-2 rounded-md  font-medium"
									>
										Home
									</Link>

									<Link
										to="/cart"
										className="cart text-gray-300 hover:bg-white-700 hover:text-black px-3 py-2 rounded-md  font-medium"
									>
										Cart
										<span className="icon">
											<AiOutlineShopping />
											<span className="number">
												{cartItemNumber}
											</span>
										</span>
									</Link>

									<Link
										to="/search"
										className=" text-gray-300 hover:bg-white-700 hover:text-black px-3 py-2 rounded-md  font-medium"
									>
										Search
									</Link>
								</div>
							</div>
						</div>
						<div className="-mr-2 flex md:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">
									Open main menu
								</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									to="/"
									className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>

								<Link
									to="/cart"
									className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Cart
									<span className="icon">
										<AiOutlineShopping />
										<span className="number">
											{cartItemNumber}
										</span>
									</span>
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</header>
	);
};

export default Header;
