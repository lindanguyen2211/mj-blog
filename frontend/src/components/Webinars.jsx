import React from 'react';
import { Link } from 'react-router-dom';
import thumbnail1 from '../assets/thumbnail1.jpg'
import thumbnail2 from '../assets/thumbnail2.jpg'

const Webinars = () => {
  const webinars = [
    {
      id: 'Modjaw-Demonstrational-Procedure ',
      title: 'Modjaw Demonstrational Procedure ',
      description: 'Discover how MODJAW is transforming digital dentistry workflows',
      date: 'July 15, 2025',
      duration: '32 min',
      thumbnail: thumbnail1,
      vimeoId: '1043708554'
    },
    {
      id: 'Modjaw-Webinar-with-Simon-Ghosh',
      title: 'Modjaw Webinar with Simon Ghosh',
      description: 'Modjaw Webinar with Simon Ghosh',
      date: 'July 22, 2025',
      duration: '28 min',
      thumbnail: thumbnail2,
      vimeoId: '775896888'
    }
  ];

  return (
    <div className="webinars-container">
      <h2>Featured Webinars</h2>
      <div className="webinars-grid">
        {webinars.map((webinar) => (
          <Link 
            to={`/webinar/${webinar.id}`}
            state={{ vimeoId: webinar.vimeoId, title: webinar.title }}
            key={webinar.id}
            className="webinar-link"
          >
            <div className="webinar-card">
              <div className="webinar-thumbnail">
                <img src={webinar.thumbnail} alt={webinar.title} />
                <div className="duration-badge">{webinar.duration}</div>
              </div>
              <div className="webinar-content">
                <h3>{webinar.title}</h3>
                <p>{webinar.description}</p>
                <div className="webinar-meta">
                  <span className="date">{webinar.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Webinars;