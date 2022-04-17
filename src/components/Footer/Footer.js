import { useHttp } from "../../hooks/http.hook";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const {request} = useHttp();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        request("http://localhost:3001/blog").then(onPostsLoaded);
    }, []);

    const onPostsLoaded = (list) => {
        let arr = [];

        list.forEach(element => {
            arr.push(element);
        });

        const newList = arr.slice(arr.length - 3);
        setPosts(newList);
    }

    const renderItems = (arr) => {
        const result = arr.map(element => {
            return (
                <div className="col-md-4" key={element.id}>
                    <Link to={`/post/${element.name}`}>
                        <div className="post-entry">
                            <div className="post-img">
                                <img src={element.image} className="img-responsive" alt={element.name}/>
                            </div>
                            <div className="post-copy">
                                <h4><a href="#">{element.name}</a></h4>
                                <span className="date-posted">{element.date}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        });

        return result;
    }

    const elements = renderItems(posts);

    return (
        <div id="gtco-footer" role="contentinfo">
            <div className="container">
                <div className="row row-pb-md">
                    <div className="col-md-12">
                        <h3 className="footer-heading">Последние посты</h3>
                    </div>
                    {elements}
                </div>

                <div className="row copyright">
                    <div className="col-md-12 text-center">
                        <p>
                            <small className="block">&copy; Курсовая работа Беззубова Дмитрия</small>
                        </p>

                        <ul className="gtco-social-icons">
                            <li><a href="https://twitter.com/" target="_blank"><i className="icon-twitter"></i></a></li>
                            <li><a href="https://www.facebook.com/" target="_blank"><i className="icon-facebook"></i></a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank"><i className="icon-linkedin"></i></a></li>
                            <li><a href="https://dribbble.com/" target="_blank"><i className="icon-dribbble"></i></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;