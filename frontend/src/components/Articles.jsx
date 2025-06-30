import React from 'react';
import ArticleCard from './ArticleCard';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: " Which 4D avatar is your patient ?",
      description: "Green, orange or red ? Discover this unique classification, allowed by jaw motion data analysis !",
      date: "June 27, 2025"
    },
    {
      id: 2,
      title: "New Software Release available",
      description: "TWIM 3.5 MODJAW users, update your TWIM software and see what's new !",
      date: "June 28, 2025"
    },
    {
      id: 3,
      title: "SCAN STRATEGY IN PRE-OP SITUATIONS - EP.1 THE DICOM",
      description: "In this series of episodes, explore how MODJAW can revolutionize workflows, simplifying even the most intricate cases",
      date: "June 29, 2025"
    },
    {
      id: 4,
      title: "CBCT DATA INTEGRATION",
      description: "TWIM™ software offers the possibility of integrating this data and building a dynamic virtual patient using patient specific motion",
      date: "June 30, 2025"
    },
    {
      id: 5,
      title: "FACESCAN INTEGRATION",
      description: "Among the latest digital tools, the facescan has made a name for itself! In the case of global and aesthetic restorations, this new tool allows to adapt the prosthetic project to the patient's physiognomy. How can the facescan be used in the 3D/4D workflow, and what possibilities does this new data offer? Follow us through this step-by-step.",
      date: "July 1, 2025"
    },
    {
      id: 6,
      title: "3SHAPE UNITE + MODJAW - digital workflow",
      description: "Discover the latest 3Shape and MODJAW integration for 3D (digital impressions) and 4D (mandibular kinematics) data acquisition and to build a dynamic virtual patient in 2 key steps",
      date: "July 2, 2025"
    }
  ];

  return (
    <div className="articles-container">
      <h2>Latest Articles</h2>
      <div className="articles-grid">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.description}
            date={article.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
