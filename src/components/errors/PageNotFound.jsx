import React from 'react';
import pageNotFoundImage from "../../images/404.png";
import './PageNotFound.css'
import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";

const PageNotFound = () => {
    return (
        <div>
            <Header showButton={false}/>
            <div className="error">
                <div className="page-not-found">Page Not Found</div>
                <div>
                    <img className="page-not-found-image" src={pageNotFoundImage} alt="404 error"/>
                </div>
                <button className="go-back-to-home">GO BACK TO HOME</button>
            </div>
            <Footer/>
        </div>
    );
};

export default PageNotFound;
