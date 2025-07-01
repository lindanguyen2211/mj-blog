import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Webinars from "./components/Webinars";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Home />} />
        </div>
      </div>
    </Router>
  );
}

export default App;