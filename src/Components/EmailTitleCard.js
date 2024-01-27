import React from "react";

const EmailTitleCard = ({title, email}) => {
  const emailString = "mailto: "+email

  return (
    <div className="email-title-card">
      <h1>{title}</h1>
      E-mail: <a href={emailString} >{email}</a>
    </div>
  )
}

export default EmailTitleCard
