import React from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import Header from 'home/Header'
import Footer from 'home/Footer'
import "./index.scss";
import CartContent from "./CartContent";

const App = () => (
  <div className=" text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="mt-10 mb-10">
      <CartContent/>
    </div>

    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
