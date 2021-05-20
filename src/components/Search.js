import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const Search = () => {
	const context = useContext(AppContext);
	const [searchTerm, setSearchTerm] = React.useState("");
	const [searchResults, setSearchResults] = React.useState(
		[]
	);
	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};
	React.useEffect(() => {
		const results = context.products.filter((product) =>
			product.name.toLowerCase().includes(searchTerm)
		);
		setSearchResults(results);
	}, [searchTerm]);

	return (
		<section className="search">
			<div className="container mx-auto">
				<h1>Search for our products.</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Beatae quos rem, error facilis
					eveniet perspiciatis tempora totam animi
					doloribus.
				</p>

				<div className="search-wrapper">
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						type="text"
						value={searchTerm}
						onChange={handleChange}
					/>
				</div>

				<div className="products search-result">
					{searchResults.length <= 0 && (
						<div className="no-results">
							<h4>No results found.</h4>
						</div>
					)}

					{searchResults.length > 0 && (
						<div className="search-result-wrapper">
							{searchResults.map((product) => (
								<div
									className="product-card"
									key={product.id}
								>
									<div className="product-image">
										<img
											src={product.thumb}
											alt={product.alt}
										/>
									</div>
									<div className="product-content">
										<h3 className="product-name">
											{product.name}
										</h3>
										<p className="product-desc">
											{product.desc}
										</p>
									</div>
									<Link
										to={`/products/${product.id}`}
										className="product-link"
									></Link>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Search;
