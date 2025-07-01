import React from 'react';
import { useLocation, useParams, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const WebinarPlayer = () => {
  const { webinarId } = useParams();
  const location = useLocation();
  const { videoType, videoId, title } = location.state || {};

  // Fallback data with updated title
  const webinarDetails = {
    'digital-dentistry-revolution': {
      videoType: 'vimeo',
      videoId: '1043708554',
      title: 'Digital Dentistry Revolution',
      description: 'This webinar explores the groundbreaking changes MODJAW technology brings to digital dentistry.'
    },
    'advanced-4d-imaging': {
      videoType: 'vimeo',
      videoId: '775896888',
      title: 'Advanced 4D Imaging Techniques',
      description: 'Learn advanced techniques for capturing and utilizing 4D imaging data.'
    },
    'dynamic-virtual-patient': {
      videoType: 'youtube',
      videoId: 'CfgGSR_qwhI',
      title: 'The Dynamic Virtual Patient',
      description: 'Discover how to create and work with dynamic virtual patients using MODJAW technology.'
    }
  };

  // Get current webinar data with proper fallbacks
  const getCurrentWebinar = () => {
    // If state was passed, use it with fallback to webinarDetails
    if (videoId) {
      return {
        ...(webinarDetails[webinarId] || {}),
        videoType,
        videoId,
        title: title || (webinarDetails[webinarId]?.title || 'Webinar')
      };
    }
    
    // If no state but webinarId exists in details
    if (webinarDetails[webinarId]) {
      return webinarDetails[webinarId];
    }
    
    // If no valid webinar found
    return null;
  };

  const currentWebinar = getCurrentWebinar();

  // Redirect to webinars page if no valid webinar found
  if (!currentWebinar) {
    return <Navigate to="/webinars" replace />;
  }

  const getEmbedUrl = () => {
    if (currentWebinar.videoType === 'youtube') {
      return `https://www.youtube.com/embed/${currentWebinar.videoId}?autoplay=1`;
    }
    return `https://player.vimeo.com/video/${currentWebinar.videoId}?autoplay=1`;
  };

  return (
    <div className="webinar-player-container">
      <Link to="/webinars" className="back-button">
        <FaArrowLeft /> Back to Webinars
      </Link>
      
      <h1>{currentWebinar.title}</h1>
      
      <div className={`video-container ${currentWebinar.videoType}`}>
        <iframe 
          src={getEmbedUrl()}
          title={currentWebinar.title}
          frameBorder="0"
          allow={`accelerometer; ${currentWebinar.videoType === 'youtube' ? 'autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' : 'fullscreen; picture-in-picture'}`}
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="webinar-details">
        <h2>About This Webinar</h2>
        <p>{currentWebinar.description}</p>
      </div>
    </div>
  );
};

export default WebinarPlayer;