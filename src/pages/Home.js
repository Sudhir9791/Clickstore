import React from 'react';
import SectionsHead from '../components/common/SectionsHead';
import TopProducts from '../components/product/TopProducts';
import Services from '../components/common/Services';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';


const Home = () => {

    return (
        <main>
            
            <Header/>
            <section id="products" className="section">
                <div className="container">
                    <SectionsHead heading="Top Products" />
                    <TopProducts />
                </div>
            </section>

            <Services />
            <Footer/>
        </main>
    );
};

export default Home;