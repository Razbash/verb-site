import '../styles/animate.css';
import '../styles/bootstrap.css';
import '../styles/flexslider.css';
import '../styles/icomoon.css';
import '../styles/style.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminPanel from '../components/AdminPanel/AdminPanel';
import HomePage from '../components/HomePage/HomePage';
import Autorization from '../components/Autorization/Autorization';
import Categories from '../components/Categories/Categories';
import ArticlePage from '../components/ArticlePage/ArticlePage';

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/autorization" element={<Autorization/>}/>
                    <Route path="/admin" element={<AdminPanel/>} />
                    <Route path="/categories/:categoryName" element={<Categories/>} />
                    <Route path="/post/:postName" element={<ArticlePage/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;