import React from 'react';
import { Link } from 'react-router-dom';
import webinar1Thumbnail from '../assets/thumbnail1.jpg';
import webinar2Thumbnail from '../assets/thumbnail2.jpg';
import webinar3Thumbnail from '../assets/thumbnail3.jpg';

const Webinars = () => {
  const webinars = [
    {
      id: 'digital-dentistry-revolution',
      title: 'Digital Dentistry Revolution',
      description: 'Discover how MODJAW is transforming digital dentistry workflows',
      date: 'July 15, 2025',
      duration: '32 min',
      thumbnail: webinar1Thumbnail,
      videoType: 'vimeo',
      videoId: '1043708554'
    },
    {
      id: 'advanced-4d-imaging',
      title: 'Advanced 4D Imaging Techniques',
      description: 'Master the latest 4D imaging protocols with MODJAW technology',
      date: 'July 22, 2025',
      duration: '28 min',
      thumbnail: webinar2Thumbnail,
      videoType: 'vimeo',
      videoId: '775896888'
    },
    {
      id: 'dynamic-virtual-patient',
      title: 'The Dynamic Virtual Patient',
      description: 'Learn how to create and utilize dynamic virtual patients in your practice',
      date: 'July 29, 2025',
      duration: '2 min',
      thumbnail: webinar3Thumbnail,
      videoType: 'youtube',
      videoId: 'CfgGSR_qwhI'
    }
  ];

  return (
    <div className="webinars-container">
      <h2>Featured Webinars</h2>
      <div className="webinars-grid">
        {webinars.map((webinar) => (
          <Link 
            to={`/webinar/${webinar.id}`}
            state={{ 
              videoType: webinar.videoType,
              videoId: webinar.videoId,
              title: webinar.title 
            }}
            key={webinar.id}
            className="webinar-link"
          >
            <div className="webinar-card">
              <div className="webinar-thumbnail">
                <img src={webinar.thumbnail} alt={webinar.title} />
                <div className="duration-badge">{webinar.duration}</div>
                <div className={`platform-badge ${webinar.videoType}`}>
                  {webinar.videoType === 'youtube' ? 'YouTube' : 'Vimeo'}
                </div>
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