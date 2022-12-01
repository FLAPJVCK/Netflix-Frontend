import React from 'react';
import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import List from "./list/List";
import Search from "./search/Search";

const HomePage = () => {
    return (
        <div>
            <Header showButton={true}/>
            <List/>
            <Search/>
            <Footer/>
        </div>
    );
};

export default HomePage;