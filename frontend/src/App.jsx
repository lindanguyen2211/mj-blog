import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Webinars from "./components/Webinars";
import WebinarPlayer from "./components/WebinarPlayer";
import UserManual from "./components/UserManual";
import Blog4D from "./components/Blog4D";
import Tutorials from "./components/Tutorials";
import PdfViewer from "./components/PdfViewer";

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
            <Route path="/pdf/:pdfName" element={<PdfViewer />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/webinar/:webinarId" element={<WebinarPlayer />} />
            <Route path="/user-manual" element={<UserManual />} />
            <Route path="/4d-blog" element={<Blog4D />} />
            <Route path="/tutorials" element={<Tutorials />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
