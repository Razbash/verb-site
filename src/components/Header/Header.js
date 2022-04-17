import {Link} from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";
import { useState, useEffect } from "react";

const Header = () => {
	const {request} = useHttp();

	const [categories, setCategories] = useState([]);

	useEffect(() => {
        request("http://localhost:3001/blog").then(onPostsLoaded);
    }, []);

    const onPostsLoaded = (list) => {
        const categoriesCollection = new Set();

		list.forEach(element => {
			categoriesCollection.add(element.category);
		});

		setCategories(categoriesCollection);
    }

	const renderItems = (arr) => {
		const myArr = Array.from(arr);

		const result = myArr.map((element, index) => {
			return(
				<li key={index}>
					<Link to={`/categories/${element}`}>{element}</Link>
				</li>
			)
		});

		return result;
	}

	const elements = renderItems(categories);

    return (
        <nav className="gtco-nav" role="navigation">
			<div className="container">
				<div className="row">
					<div className="col-xs-2 text-left">
						<Link to="/" className="logo">
							<div id="gtco-logo">Verb<span>.</span></div>
						</Link>
					</div>
					<div className="col-xs-10 text-right menu-1">
						<ul>
							{elements}
							<li>
								<Link to="/autorization">Авторизация</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
    )
}

export default Header;