import React from "react";
import './LocationCard.css'

const LocationCard = ({location, dates}) => {
  return (
    <div className="location-card">
      <p>{location}</p>
      <p>{dates}</p>
    </div>
  )
}

export default LocationCard
