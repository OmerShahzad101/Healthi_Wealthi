import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import NotFoundPage from "../Pages/NotFoundPage";
import RegisterPage from "../Pages/RegisterPage";

const MyRouts = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MyRouts;
