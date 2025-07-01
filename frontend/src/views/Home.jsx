import React from "react";
import Articles from "../components/Articles";
import FeaturedArticle from "../components/FeaturedArticle";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <main id="main-section">
      <Sidebar />
      <section className="right">
        <FeaturedArticle />
        <Articles />
      </section>
    </main>
  );
};

export default Home;
