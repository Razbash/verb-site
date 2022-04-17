import Header from "../Header/Header";
import Banner from '../Banner/Banner';
import NewsList from '../NewsList/NewsList';
import Footer from '../Footer/Footer';
import BackToTopButton from '../BackToTopButton/BackToTopButton';

const HomePage = () => {
    return(
        <>
            <Header/>
            <Banner/>
            <NewsList/>
            <BackToTopButton/>
            <Footer/>
        </>
    )
}

export default HomePage;