import Header from "../Header/Header";
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import BackToTopButton from '../BackToTopButton/BackToTopButton';
import { useHttp } from "../../hooks/http.hook";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
    const {postName} = useParams();
    const {request} = useHttp();
    const [post, setPost] = useState([]);

    useEffect(() => {
        request(`http://localhost:3001/blog?name=${postName}`).then(onPostsLoaded);
    }, [postName]);

    const onPostsLoaded = (list) => {
        setPost(list[0]);
    }

    const createMarkup = () => {
        return {__html: post.content};
    }

    const formatDate = (date) => {
        date = new Date(date);

        const day = date.getDate();
        const mounth = date.getMonth();
        const year = date.getFullYear();

        return `${day}-${mounth}-${year}`;
    }

    return(
        <>
            <Header/>
            <Banner name={post.name} image={post.image} date={formatDate(post.date)} href="#article"/>
            <div className="gtco-main">
                <div className="container">
                    <div className="row row-pb-md">
                        <div className="col-md-12">
                            <article id="article">
                                <div className="text-left content-article article-page">
                                    <div dangerouslySetInnerHTML={createMarkup()} className="row">
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTopButton/>
            <Footer/>
        </>
    )
}

export default ArticlePage;