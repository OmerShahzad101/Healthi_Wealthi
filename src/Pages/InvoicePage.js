import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Invoice from '../components/Invoice/Invoice';

const InvoicePage = () => {
    return (
        <div>
            <Header />
            <Invoice/>
            <Footer/>
        </div>
    );
};

export default InvoicePage;