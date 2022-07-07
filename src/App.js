import React from "react";
import MainRoutes from "./routes.js";
import { BrowserRouter as Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Routes>
        <MainRoutes />
      </Routes>
        
    );
  }
}

export default App;
