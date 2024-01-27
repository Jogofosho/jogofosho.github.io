import React, { useState, useEffect } from 'react';
import './ResumePageCard.css';

const ResumePageCard = ({ title, content, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation by setting isVisible to true after a delay
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, index * 300); // Adjust the delay as needed

    return () => clearTimeout(timeoutId); // Cleanup the timeout on unmount

  }, [index]);

  return (
    <div className={`resume-page-card ${isVisible ? 'fade-in' : ''}`}>
      <h2>{title}</h2>
        <div key={index} className="section-entry">
          <h3>{content.mainTitle}</h3>
          <p className="location">{content.location}</p>
          <p className="dates">{content.startDate}{content.endDate}</p>
          <ul className="extra-section-info">
            {content.extraInfo.map((point, i) => (
              <div key={i} className="bullet-point">&#8226; {point}</div>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default ResumePageCard;