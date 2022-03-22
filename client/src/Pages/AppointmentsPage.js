import React from "react";
import Appointments from "../components/Appointments/Appointments";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
const AppointmentsPage = () => {
  return (
    <div>
      <Header />
      <Appointments />
      <Footer />
    </div>
  );
};

export default AppointmentsPage;
