import React from 'react';
import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import Search from "./search/Search";
import List from "./list/List";

const HomePage = () => {
    return (
        <div>
            <Header showButton={true}/>
            <Search/>
            <List/>
            <Footer/>
        </div>
    );
};

export default HomePage;