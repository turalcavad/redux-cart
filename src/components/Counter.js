import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index";

const Counter = () => {
	const dispatch = useDispatch();

	const count = useSelector((state) => state.counter.counter);
	const show = useSelector((state) => state.counter.showCounter);

	const toggleCountHandler = () => {
		dispatch(counterActions.showToggle());
	};

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>-- {count} --</div>}
			<button onClick={toggleCountHandler}>Toggle Counter</button>
			<button onClick={incrementHandler}>Increment</button>
			<button onClick={decrementHandler}>Decrement</button>
		</main>
	);
};

export default Counter;
