import React from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title:
        "Accuracy of the maxillomandibular relationship at centric relation position recorded by using 3 different intraoral scanners and MODJAW",
      date: "June 27, 2025",
      pdf: "Accuracy-of-the-maxillomandibular-relationship-at-centric-relation-position-recorded-by-using-3-different-intraoral-scanners-and-MODJAW",
    },
    {
      id: 2,
      title: "Aesthetic & Function: the 4D solution clinical evaluation",
      date: "June 28, 2025",
      pdf: "Aesthetic & Function_the 4D solution clinical evaluation_EN",
    },
    {
      id: 3,
      title:
        "The FAS Aligner System and the treatment of temporomandibular disorder",
      date: "June 29, 2025",
      pdf: "aligners0223_P58_69_Martin_Final_NEW[295964]",
    },
    {
      id: 4,
      title: "An overview of the digital occlusion technologies",
      date: "June 30, 2025",
      pdf: "An overview of the digital occlusion technologies- Intraoral scanners, jaw tracking systems, and computerized occlusal analysis devices",
    },
    {
      id: 5,
      title: "Aesthetic & Function: A complete case with MODJAWf",
      date: "July 1, 2025",
      pdf: "ARTICLE_FREE_Aesthetic & Function_A complete case with MODJAW_EN",
    },
    {
      id: 6,
      title: "Full Digital Workflow for TMDs Management A Case Series",
      date: "July 2, 2025",
      pdf: "ARTICLE_FREE_Full-DigitalWorkflow for TMDs Management A Case Series - Dr Simona Tecco healthcare-11-00790",
    },
    {
      id: 7,
      title:
        "MANAGE THE DYNAMIC OCCLUSION OF IMPLANT RESTORATIONS IN A DIGITAL WORKFLOW",
      date: "July 2, 2025",
      pdf: "ARTICLE_NOT FREE_MANAGE THE DYNAMIC OCCLUSION OF IMPLANT RESTORATIONS IN A DIGITAL WORKFLOW",
    },
    {
      id: 8,
      title:
        "Modjaw in daily orthodontic practice: about a case treated with FAS aligners",
      date: "July 2, 2025",
      pdf: "Dr Domingo Martin_ortodoncia_actual_75-26-38",
    },
    {
      id: 9,
      title: "Full Digital rehabilitation in TMD patient Baldassarre",
      date: "July 2, 2025",
      pdf: "Full Digital rehabilitation in TMD patient Baldassarre",
    },
    {
      id: 10,
      title:
        "Fully digital workflow for the fabrication of occlusal stabilization splints",
      date: "July 2, 2025",
      pdf: "Fully digital workflow for the fabrication of occlusal stabilization splints",
    },
    {
      id: 11,
      title: "MODJAW - Ortho Case",
      date: "July 2, 2025",
      pdf: "MODJAW - Ortho Case",
    },
    {
      id: 12,
      title:
        "Thesis US Air Force: Mandibular Movement in 4D Accuracy of a Digital Mandibular Movement",
      date: "July 2, 2025",
      pdf: "Thesis_US_Air_Force_Mandibular Movement in 4D Accuracy of a Digital Mandibular Movement",
    },
  ];

  return (
    <div className="articles-container">
      <h2>Latest Articles</h2>
      <div className="articles-grid">
        <Link to="/articles" className="back-button">
          <FaArrowLeft /> Back to Articles
        </Link>
        {articles.map((article) => (
          <Link
            to={`/pdf/${article.pdf}`}
            key={article.id}
            className="article-link"
          >
            <ArticleCard
              key={article.id}
              title={article.title}
              date={article.date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;
