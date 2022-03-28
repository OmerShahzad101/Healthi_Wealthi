import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Chat from "../components/Chat/Chat";
import VideoCall from "../components/VideoCall/VideoCall";
import AudioCall from "../components/AudioCall/AudioCall";
import ClientProfile from "../components/ClientProfile/ClientProfile";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Calendar from "../components/Calendar/Calendar";
import Checkout from "../components/Checkout/Checkout";
import Invoice from "../components/Invoice/Invoice";
import Favourites from "../components/Favourites/Favourites";
import SearchCoach from "../components/SearchCoach/SearchCoach";
import CoachProfile from "../components/CoachProfile/CoachProfile";
import InvoicesView from "../components/InvoicesView/InvoicesView";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import BookAppointment from "../components/BookAppointment/BookAppointment";
import BookingSuccessful from "../components/BookingSuccessful/BookingSuccessful";
import ClientDashboard from "../components/ClientDashboard/ClientDashboard";
import ProfileSetting from "../components/ProfileSetting/ProfileSetting";
import ChangePassword from "../components/ChangePassword/ChangePassword";
import Appointments from "../components/Appointments/Appointments";
import Reviews from "../components/Reviews/Reviews";
import CoachDashboard from "../components/CoachDashboard/CoachDashboard";
import MyClient from "../components/MyClient/MyClient";
import CoachProfileSetting from "../components/About/About";
import About from "../components/About/About";
import CoachChangePassword from "../components/CoachChangePassword/CoachChangePassword";
import Contact from "../components/Contact/Contact";
import NotFound from "../components/NotFound/NotFound";

const MyRouts = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/user-container" element={<UsersContainer />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/search-coach" element={<SearchCoach />} />
          <Route path="/coach-profile" element={<CoachProfile />} />
          <Route path="/invoices-view" element={<InvoicesView />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/booking-successful" element={<BookingSuccessful />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/profile-settings" element={<ProfileSetting />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/coach-dashboard" element={<CoachDashboard />} />
          <Route path="/my-clients" element={<MyClient />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/coach-profile-setting"
            element={<CoachProfileSetting />}
          />
          <Route
            path="/coach-change-password"
            element={<CoachChangePassword />}
          />
          <Route path="/chat" element={<Chat />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/videocall" element={<VideoCall />} />
          <Route path="/audiocall" element={<AudioCall />} />
          <Route path="/client-profile" element={<ClientProfile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
export default MyRouts;
