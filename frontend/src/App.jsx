import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Articles from "./components/Articles";
import FeaturedArticle from "./components/FeaturedArticle";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Webinars from "./components/Webinars"; 
import UserManual from "./components/UserManual"; 
import Blog4D from "./components/Blog4D"; 
import Tutorials from "./components/Tutorials"; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <div className="container">
          <main id="main-section">
            <Sidebar />
            <section className="right">
              <Routes>
                <Route path="/" element={
                  <>
                    <FeaturedArticle />
                    <Articles />
                  </>
                } />
                <Route path="/articles" element={
                  <>
                    <FeaturedArticle />
                    <Articles />
                  </>
                }  />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/user-manual" element={<UserManual />} />
                <Route path="/4d-blog" element={<Blog4D />} />
                <Route path="/tutorials" element={<Tutorials />} />
              </Routes>
            </section>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;