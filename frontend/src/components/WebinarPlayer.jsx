import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const WebinarPlayer = () => {
  const { webinarId } = useParams();
  const location = useLocation();
  const { vimeoId, title } = location.state || {};

  // Fallback data in case state isn't passed
  const webinarDetails = {
    'digital-dentistry-revolution': {
      vimeoId: '1043708554',
      title: 'Digital Dentistry Revolution'
    },
    'advanced-4d-imaging': {
      vimeoId: '775896888',
      title: 'Advanced 4D Imaging Techniques'
    }
  };

  const currentWebinar = vimeoId 
    ? { vimeoId, title } 
    : webinarDetails[webinarId];

  return (
    <div className="webinar-player-container">
      <Link to="/webinars" className="back-button">
        <FaArrowLeft /> Back to Webinars
      </Link>
      
      <h1>{currentWebinar.title}</h1>
      
      <div className="video-container">
        <iframe 
          src={`https://player.vimeo.com/video/${currentWebinar.vimeoId}?autoplay=1`}
          title={currentWebinar.title}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="webinar-details">
        <h2>About This Webinar</h2>
        <p>
          {currentWebinar.title === 'Digital Dentistry Revolution' 
            ? 'This webinar explores the groundbreaking changes MODJAW technology brings to digital dentistry, covering workflow optimizations and clinical benefits.'
            : 'Learn advanced techniques for capturing and utilizing 4D imaging data to enhance diagnosis and treatment planning in your practice.'}
        </p>
      </div>
    </div>
  );
};

export default WebinarPlayer;