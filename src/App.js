import React from "react";
import MainRoutes from "./routes.js";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <MainRoutes />
        <Link to="/" class="paper-button">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <bds-paper>
            <bds-icon name="home"></bds-icon>
          </bds-paper>
          </motion.div>
        </Link>
      </Router>
        
    );
  }
}

export default App;
