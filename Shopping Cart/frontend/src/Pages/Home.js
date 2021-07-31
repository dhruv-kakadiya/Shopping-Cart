import React from 'react';
import Carousel from '../Componants/Carousel';
import Categories from '../Componants/Categories';
import SaleHome from '../Componants/SaleHome';
import Header from '../Componants/Header';
import Footer from '../Componants/Footer';

function Home() {
    return (
        <>
            <Header/>
            <Carousel/>
            <Categories/>
            <SaleHome/>
            <Footer/>
        </>
    )
}

export default Home;
