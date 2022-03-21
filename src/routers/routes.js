import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookAppointmentPage from "../Pages/BookAppointmentPage";
import BookingSuccessfulPage from "../Pages/BookingSuccessfulPage";
import CheckoutPage from "../Pages/CheckoutPage";
import CoachProfilePage from "../Pages/CoachProfile";
import HomePage from "../Pages/HomePage";
import InvoicesViewPage from "../Pages/InvoicesViewPage";
import LoginPage from "../Pages/LoginPage";
import NotFoundPage from "../Pages/NotFoundPage";
import RegisterPage from "../Pages/RegisterPage";
import CalendarPage from "../Pages/CalendarPage";
import ForgotPasswordPage from "../Pages/ForgotPasswordPage";
const MyRouts = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="/coach-profile" element={<CoachProfilePage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/booking-successful" element={<BookingSuccessfulPage />} />
          <Route path="/invoices-view" element={<InvoicesViewPage />} />
         
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
};
export default MyRouts;
