import React, { useState, useEffect } from 'react';
import './HomePageCard.css'; // Styles for the card

const HomePageCard = ({ children }) => {
	const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Add the 'active' class after a short delay to trigger the fade-in animation
    const timeout = setTimeout(() => {
      setIsActive(true);
    }, 100);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`home-page-card ${isActive ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default HomePageCard;
