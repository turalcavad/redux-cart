import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";

let isInitial = true;

function App() {
	const dispatch = useDispatch();
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const cart = useSelector((state) => state.cart);
	const notification = useSelector((state) => state.ui.notification);

	useEffect(() => {
		const sendCartData = async () => {
			dispatch(
				uiActions.showNotification({
					status: "pending...",
					title: "sending...",
					message: "Sending cart data!",
				})
			);

			const response = await fetch(
				"https://redux-cart-15a60-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
				{
					method: "PUT",
					body: JSON.stringify(cart),
				}
			);

			dispatch(
				uiActions.showNotification({
					status: "success",
					title: "Success!",
					message: "Sent cart data successfully",
				})
			);

			if (!response.ok) {
				throw new Error("sending cart data failed");
			}
		};

		if (isInitial) {
			isInitial = false;
			return;
		}

		sendCartData().catch(
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "error",
					message: "Sending cart data failed",
				})
			)
		);
	}, [cart, dispatch]);
	return (
		<>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}

			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default App;
