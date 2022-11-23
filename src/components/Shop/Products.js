import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
	const DUMMY_DATA = [
		{
			id: 1,
			title: "Apple",
			price: 6,
			description: "This is a first product - amazing",
		},
		{
			id: 2,
			title: "Pear",
			price: 10,
			description: "This is a second product - amazing",
		},
		{
			id: 3,
			title: "Orange",
			price: 15,
			description: "This is a third product - amazing",
		},
	];

	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_DATA.map((p) => {
					return (
						<ProductItem
							key={p.id}
							title={p.title}
							price={p.price}
							description={p.description}
							id={p.id}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default Products;
