export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";

//Add to cart
const addProductToCart = (product, state) => {
	const updatedCart = [...state.cart];
	const updatedItemIndex = updatedCart.findIndex(
		(item) => item.id === product.id
	);

	const increaseQuantity = () => {
		if (updatedItemIndex < 0) {
			updatedCart.push({ ...product, quantity: 1 });
		} else {
			const updatedItem = {
				...updatedCart[updatedItemIndex],
			};
			updatedItem.quantity++;
			updatedCart[updatedItemIndex] = updatedItem;
			increaseQuantity();
		}
		return { ...state, cart: updatedCart };
	};

	if (updatedItemIndex < 0) {
		updatedCart.push({ ...product, quantity: 1 });
	} else {
		const updatedItem = {
			...updatedCart[updatedItemIndex],
		};
		updatedItem.quantity++;
		updatedCart[updatedItemIndex] = updatedItem;
	}
	return { ...state, cart: updatedCart };
};

//Remove from cart
const removeProductFromCart = (productId, state) => {
	console.log("Removing product with id: " + productId);
	const updatedCart = [...state.cart];
	const updatedItemIndex = updatedCart.findIndex(
		(item) => item.id === productId
	);

	const updatedItem = {
		...updatedCart[updatedItemIndex],
	};
	updatedItem.quantity--;
	updatedCart.splice(updatedItemIndex, 1);
	return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return addProductToCart(action.product, state);
		case REMOVE_PRODUCT:
			return removeProductFromCart(action.productId, state);
		default:
			return state;
	}
};
