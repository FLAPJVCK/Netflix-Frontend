import React from 'react';
import pageNotFoundImage from "../../images/404.png";
import './PageNotFound.css'
import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";

const PageNotFound = () => {
    return (
        <div>
            <Header showButton={false}/>
            <div className="page-not-found">
                <h2 className="page-not-found__text">Page Not Found</h2>
                <div>
                    <img className="page-not-found__image" src={pageNotFoundImage} alt="404 error"/>
                </div>
                <button className="page-not-found__button">GO BACK TO HOME</button>
            </div>
            <Footer/>
        </div>
    );
};

export default PageNotFound;
