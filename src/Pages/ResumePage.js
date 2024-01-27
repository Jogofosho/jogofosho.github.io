import React from 'react';
import ResumePageCard from '../Components/ResumePageCard';
import './ResumePage.css';

const ResumePage = () => {
  const cardData = [
    { title: 'Contact Info', content: 'E-mail: gonzal15@myumanitoba.ca' },
    { title: 'Card 2', content: 'Content for card 2'},
    { title: 'Card 2', content: 'Content for card 2'},
    { title: 'Card 2', content: 'Content for card 2'},
    { title: 'Card 2', content: 'Content for card 2'},
    // Add more card data as needed
  ];

  return (
    <div className="resume-page-main-container">
      <h1>Joseph Gonzales' Resume</h1>
      <div className="resume-page-card-container">
        {cardData.map((card, index) => (
          <ResumePageCard key={index} title={card.title} content={card.content} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ResumePage;
