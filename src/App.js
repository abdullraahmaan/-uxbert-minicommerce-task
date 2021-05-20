import { Route, Switch } from "react-router-dom";
import GlobalState from "./context/GlobalState";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import "./styles/index.scss";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
	return (
		<GlobalState>
			<div className="App">
				<Header></Header>

				<main>
					<Switch>
						<Route exact path="/">
							<Hero></Hero>
							<Products></Products>
						</Route>

						<Route path="/products/:productId">
							<ProductDetails></ProductDetails>
						</Route>

						<Route path="/cart">
							<Cart></Cart>
						</Route>

						<Route path="/search">
							<Search></Search>
						</Route>
					</Switch>
				</main>

				<Footer></Footer>
			</div>
		</GlobalState>
	);
}

export default App;
