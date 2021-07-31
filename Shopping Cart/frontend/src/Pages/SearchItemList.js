import React from 'react';
import Footer from '../Componants/Footer';
import Header from '../Componants/Header';
import ItemsContainer from '../Componants/ItemsContainer';

function SearchItemList() {
    return (
        <>
            <Header/>
            <section id="items-page">
                <div className="container">
                    <div className="filter"></div>
                    <ItemsContainer/>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default SearchItemList;
