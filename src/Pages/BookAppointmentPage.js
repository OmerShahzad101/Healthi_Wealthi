import React from 'react';
import BookAppointment from '../components/BookAppointment/BookAppointment';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const BookAppointmentPage = () => {
    return (
        <div>
            <Header/>
            <BookAppointment/>
            <Footer/>
        </div>
    );
};

export default BookAppointmentPage;