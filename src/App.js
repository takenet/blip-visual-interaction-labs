import React from "react";
import MainRoutes from "./routes.js";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <MainRoutes />
      </Router>
        
    );
  }
}

export default App;
