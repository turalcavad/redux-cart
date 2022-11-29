import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalQuantity: 0,
	},
	reducers: {
		replaceCart(state, action) {
			state.items = action.payload.items;
		},

		addItemToCart(state, action) {
			const newItem = action.payload;

			const existingItem = state.items.find((item) => item.id === newItem.id);

			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					title: newItem.title,
					description: newItem.description,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = newItem.price * existingItem.quantity;
			}
		},
		removeItemCart() {},
		decreaseQuantity(state, action) {
			const itemId = action.payload;

			const currentItem = state.items.find((i) => i.id === itemId);

			if (currentItem.quantity === 1) return;

			currentItem.quantity--;
			currentItem.totalPrice = currentItem.price * currentItem.quantity;
		},
		increaseQuantity(state, action) {
			const itemId = action.payload;

			const currentItem = state.items.find((i) => i.id === itemId);

			currentItem.quantity++;
			currentItem.totalPrice = currentItem.price * currentItem.quantity;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
