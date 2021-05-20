import React, { useReducer } from "react";
import AppContext from "./AppContext";
import {
	shopReducer,
	ADD_PRODUCT,
	REMOVE_PRODUCT,
} from "./Reducers";

const GlobalState = (props) => {
	const products = [
		{
			id: 1,
			name: "Housery",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
			thumb:
				"https://template.bepd.dev/whiteble/assets/img/item1.jpg",
			alt: "Product Thumbnail",
			info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
			modelNumber: 20389,
			weight: "300 gm",
			size: "120x30 cm",
			inCart: false,
			count: 0,
			total: 0,
			price: 10,
		},
		{
			id: 2,
			name: "Green Line",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
			thumb:
				"https://template.bepd.dev/whiteble/assets/img/item2.jpg",
			alt: "Product Thumbnail",
			info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
			modelNumber: 20389,
			weight: "300 gm",
			size: "120x30 cm",
			inCart: false,
			count: 0,
			total: 0,
			price: 10,
		},
		{
			id: 3,
			name: "Enfasi",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
			thumb:
				"https://template.bepd.dev/whiteble/assets/img/item3.jpg",
			alt: "Product Thumbnail",
			info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
			modelNumber: 20389,
			weight: "300 gm",
			size: "120x30 cm",
			inCart: false,
			count: 0,
			total: 0,
			price: 10,
		},
		{
			id: 4,
			name: "Pulse",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
			thumb:
				"https://template.bepd.dev/whiteble/assets/img/item4.jpg",
			alt: "Product Thumbnail",
			info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
			modelNumber: 20389,
			weight: "300 gm",
			size: "120x30 cm",
			inCart: false,
			count: 0,
			total: 0,
			price: 10,
		},
		{
			id: 5,
			name: "Archotale",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
			thumb:
				"https://template.bepd.dev/whiteble/assets/img/item5.jpg",
			alt: "Product Thumbnail",
			info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
			modelNumber: 20389,
			weight: "300 gm",
			size: "120x30 cm",
			inCart: false,
			count: 0,
			total: 0,
			price: 10,
		},
		{
			id: 6,
			name: "iPackage",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
			thumb:
				"https://template.bepd.dev/whiteble/assets/img/item6.jpg",
			alt: "Product Thumbnail",
			info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
			modelNumber: 20389,
			weight: "300 gm",
			size: "120x30 cm",
			inCart: false,
			count: 0,
			total: 0,
			price: 10,
		},
	];

	const [cartState, dispatch] = useReducer(shopReducer, {
		cart: [],
	});

	const addProductToCart = (product) => {
		dispatch({ type: ADD_PRODUCT, product: product });
	};

	const removeProductFromCart = (productId) => {
		dispatch({
			type: REMOVE_PRODUCT,
			productId: productId,
		});
	};

	return (
		<AppContext.Provider
			value={{
				products: products,
				cart: cartState.cart,
				addProductToCart: addProductToCart,
				removeProductFromCart: removeProductFromCart,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default GlobalState;
