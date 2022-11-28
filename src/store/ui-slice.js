import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: "cart",
	initialState: {
		cartIsVisible: true,
		notification: null,
	},
	reducers: {
		toggleShow(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},
		showNotification(state, actions) {
			state.notification = {
				status: actions.payload.status,
				title: actions.payload.title,
				message: actions.payload.message,
			};
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice;
