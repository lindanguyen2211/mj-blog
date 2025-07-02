import React from 'react';
import { useParams } from 'react-router-dom';

const PdfViewer = () => {
  const { pdfName } = useParams();
  
  return (
    <div className="pdf-viewer-container">
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