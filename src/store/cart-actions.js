import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = (cart) => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				"https://redux-cart-15a60-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
			);

			if (!response.ok) {
				throw new Error("Could not fetch cart data.");
			}

			const data = await response.json();

			return data;
		};
		try {
			const cartData = await fetchData();
			dispatch(cartActions.replaceCart(cartData));
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "error",
					message: "Fetching cart data failed",
				})
			);
		}
	};
};

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: "pending...",
				title: "sending...",
				message: "Sending cart data!",
			})
		);

		dispatch(
			uiActions.showNotification({
				status: "success",
				title: "Success!",
				message: "Sent cart data successfully",
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				"https://redux-cart-15a60-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
				{
					method: "PUT",
					body: JSON.stringify(cart),
				}
			);

			if (!response.ok) {
				throw new Error("sending cart data failed");
			}
		};

		try {
			await sendRequest();
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "error",
					message: "Sending cart data failed",
				})
			);
		}
	};
};
