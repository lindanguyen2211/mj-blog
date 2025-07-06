import React from 'react';
import placeholder from '../assets/banner.png'; // Update with your image path

// const ArticleCard = ({ title, description, date, image }) => {
const ArticleCard = ({ title, date,tags }) => {
  return (
    <div className='article-card'>
      {/* <img src={image || placeholder} alt={title} /> */}
      <h1>{title}</h1>
      <p className="date">{date}</p>
      <div className='tag-container'>{tags.map((tag, index)=> (<p className="tag" key={index}>{tag}</p>))}</div>
    </div>
  );
};

export default ArticleCard;