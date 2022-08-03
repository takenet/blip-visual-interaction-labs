import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Home from "./home/home";
import Test from "./page-test/";
import "./style.scss";
import { Routes, Route } from "react-router-dom";

export default class Main extends React.Component {
  render() {
    return (
      <div className="container-main">
        <Sidebar />
        <Navbar />
        <div className="pages-routes">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        </div>
        
      </div>
    );
  }
}
