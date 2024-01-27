import React from 'react';
import EmailTitleCard from '../Components/EmailTitleCard';
import ResumePageCard from '../Components/ResumePageCard';
import './ResumePage.css';
import * as ResumeData from '../Constants/ResumeData.js'

const ResumePage = () => {
  return (
    <div className="resume-page-main-container">
      <EmailTitleCard title="Joseph Gonzales' Resume" email="gonzal15@myumanitoba.ca"/>
      <div className="resume-page-card-container">
        <h2><u>Education</u></h2>
        {ResumeData.educationData.map((data, index) => (
          <ResumePageCard key={index} index={index} content={data}/>
        ))}
        <h2><u>Technical Skills</u></h2>
        {ResumeData.technicalSkillsData.map((data, index) => (
          <ResumePageCard key={index} index={index} content={data}/>
        ))}
      </div>
    </div>
  );
};

export default ResumePage;
