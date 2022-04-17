import { useHttp } from "../../hooks/http.hook";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../NewsList/newsList.css';
import Header from "../Header/Header";
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import BackToTopButton from '../BackToTopButton/BackToTopButton';

const Categories = () => {
    const {categoryName} = useParams();
    const [posts, setPosts] = useState([]);
    const {request} = useHttp();

    useEffect(() => {
        request(`http://localhost:3001/blog?category=${categoryName}`).then(onPostsLoaded);
    },[categoryName])

    const onPostsLoaded = (list) => {
        setPosts(list);
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
        <>
            <Header/>
            <Banner/>
            <div id="gtco-main">
                <div className="container">
                    <div className="row row-pb-md">
                        <div className="col-md-12">
                            <ul id="gtco-post-list">
                                {elements}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTopButton/>
            <Footer/>
        </>
    )
}

export default Categories;