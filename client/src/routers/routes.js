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
import SearchCoachPage from "../Pages/SearchCoachPage";
import InvoicePage from "../Pages/InvoicePage";
import ClientDashboardPage from "../Pages/ClientDashboardPage";
import FavouritesPage from "../Pages/FavouritesPage";
import ProfileSettingPage from "../Pages/ProfileSettingPage";
import ChangePasswordPage from "../Pages/ChangePasswordPage";
import AppointmentsPage from "../Pages/AppointmentsPage";
import ReviewsPage from "../Pages/ReviewsPage";
const MyRouts = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/search-coach" element={<SearchCoachPage />} />
          <Route path="/coach-profile" element={<CoachProfilePage />} />
          <Route path="/invoices-view" element={<InvoicesViewPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route path="/booking-successful" element={<BookingSuccessfulPage />} />
          <Route path="/client-dashboard" element={<ClientDashboardPage />} />
          <Route path="/profile-setting" element={<ProfileSettingPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
};
export default MyRouts;