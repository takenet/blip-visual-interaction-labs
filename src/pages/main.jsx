import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";
import Home from "./home/";
import "./style.scss";

export default class Main extends React.Component {
  render() {
    return (
      <div className="container-main">
        <Sidebar />
        <Navbar />
        <Home />
      </div>
    );
  }
}
