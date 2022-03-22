import React from "react";
import Header from "../components/Header/Header";
import InvoicesView from "../components/InvoicesView/InvoicesView";
import Footer from "../components/Footer/Footer";

const InvoicePage = () => {
  return (
    <div>
      <Header />
      <InvoicesView />
      <Footer />
    </div>
  );
};

export default InvoicePage;
