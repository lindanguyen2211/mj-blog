import React from 'react';
import { Link } from 'react-router-dom';
import webinar1Thumbnail from '../assets/thumbnail1.jpg';
import webinar2Thumbnail from '../assets/thumbnail2.jpg';
import webinar3Thumbnail from '../assets/thumbnail3.jpg';
import thumbnail4 from '../assets/thumbnail4.jpg'

const Videos = ({category}) => {
  const videos = [
    {
      id: 'digital-dentistry-revolution',
      title: 'Digital Dentistry Revolution',
      description: 'Discover how MODJAW is transforming digital dentistry workflows',
      date: 'July 15, 2025',
      duration: '32 min',
      thumbnail: webinar1Thumbnail,
      videoType: 'vimeo',
      videoId: '1043708554',
      category: "webinar"
    },
    {
      id: 'advanced-4d-imaging',
      title: 'Advanced 4D Imaging Techniques',
      description: 'Master the latest 4D imaging protocols with MODJAW technology',
      date: 'July 22, 2025',
      duration: '28 min',
      thumbnail: webinar2Thumbnail,
      videoType: 'vimeo',
      videoId: '775896888',
      category: "webinar"

    },
    {
      id: 'dynamic-virtual-patient',
      title: 'The Dynamic Virtual Patient',
      description: 'Learn how to create and utilize dynamic virtual patients in your practice',
      date: 'July 29, 2025',
      duration: '2 min',
      thumbnail: webinar3Thumbnail,
      videoType: 'youtube',
      videoId: 'CfgGSR_qwhI',
      category: "webinar"
    },
    {
      id: 'import-modjaw-4d-to-exocad',
      title: 'Import MODJAW 4D data to exocad',
      description: 'Learn how to import modjaw 4d data into exocad',
      date: 'July 29, 2025',
      duration: '3 min',
      thumbnail: thumbnail4,
      videoType: 'youtube',
      videoId: 'u8YLkLIb67E',
      category: "tutorials"
    }
  ];

  return (
    <div className="videos-container">
      <div className="videos-grid">
        {videos
          .filter(video => video.category === category)
          .map((video) => (
            <Link 
              to={`/${category}/${video.id}`}
              state={{ 
                videoType: video.videoType,
                videoId: video.videoId,
                title: video.title 
              }}
              key={video.id}
              className="video-link"
            >
              <div className="video-card">
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="duration-badge">{video.duration}</div>
                  <div className={`platform-badge ${video.videoType}`}>
                    {video.videoType === 'youtube' ? 'YouTube' : 'Vimeo'}
                  </div>
                </div>
                <div className="video-content">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <div className="video-meta">
                    <span className="date">{video.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Videos;