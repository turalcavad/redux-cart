import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
	const dispatch = useDispatch();
	const cartLength = useSelector((state) => state.cart.items.length);

	const toggleCartHandler = () => {
		dispatch(uiActions.toggleShow());
	};

	return (
		<button onClick={toggleCartHandler} className={classes.button}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartLength}</span>
		</button>
	);
};

export default CartButton;
