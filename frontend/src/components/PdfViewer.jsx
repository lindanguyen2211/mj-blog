import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const PdfViewer = () => {
  const { pdfName } = useParams();
  
  return (
    <div className="pdf-viewer-container">
      <Link to="/articles" className="back-button">
        <FaArrowLeft /> Back to Articles
      </Link>
      <div className="pdf-viewer">
        <iframe 
          src={`/pdfs/${pdfName}.pdf`} 
          title={pdfName}
        />
      </div>
    </div>
  );
};

export default PdfViewer;