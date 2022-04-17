import { useHttp } from "../../hooks/http.hook";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './newsList.css';

const NewsList = () => {
    const {request} = useHttp();
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        request(`http://localhost:3001/blog?_limit=${limit}`).then(onPostsLoaded);
    }, [limit]);

    const onPostsLoaded = (list) => {
        setPosts(list);
    }

    const handleLimit = () => {
        setLimit(limit => limit + 10);
    }

    const formatDate = (date) => {
        date = new Date(date);

        const day = date.getDate();
        const mounth = date.getMonth();
        const year = date.getFullYear();

        return `${day}-${mounth}-${year}`;
    }

    const renderItems = (arr) => {
        const result = arr.map(element => {
            function createMarkup() {
                return {__html: element.content};
            }

            return(
                <li className="one-half entry animate-box" data-animate-effect="fadeIn" key={element.id}>
                    <Link to={`/post/${element.name}`}>
                        <img src={element.image} alt={element.name} className="entry-img article-img" />
                        <div className="entry-desc">
                            <h3>{element.name}</h3>
                            <div dangerouslySetInnerHTML={createMarkup()} className="post-content article-page--s"/>
                        </div>
                    </Link>
                    <a href="single.html" className="post-meta">{element.category}
                        <span className="date-posted">{formatDate(element.date)}</span>
                    </a>
                </li>
            )
        });

        return result;
    }

    const elements = renderItems(posts);

    return(
        <div id="gtco-main">
            <div className="container">
                <div className="row row-pb-md">
                    <div className="col-md-12">
                        <ul id="gtco-post-list">
                            {elements}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <button type="button" className="btn btn-primary" onClick={handleLimit}>Показать больше</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsList;