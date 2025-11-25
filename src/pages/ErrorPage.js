import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import './error.css';
const ErrorPage = () => {
    return (
        <>
        <Header/>
            <section id="error_page" className="section">
                <div className="error_container">
                    <div className="error_page_content">
                        <h1>404</h1>
                        <h2>Not Found</h2>
                        <h3>Sorry, the requested page was not found.</h3>
                        <Link to="/" className="error_btn">Go Home</Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default ErrorPage;