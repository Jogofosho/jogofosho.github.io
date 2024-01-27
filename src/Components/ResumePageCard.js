import React, { useState, useEffect } from 'react';
import './ResumePageCard.css';

const ResumePageCard = ({ location, title, content, index }) => {
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
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{content}</p>
    </div>
  );
};

export default ResumePageCard;