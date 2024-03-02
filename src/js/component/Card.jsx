import React from "react";


const Card = ({ imageUrl, title, description, buttonText }) => {

  const cardStyles = {
    width: "18rem",
    height: "35rem",

  }
  return (
    <div className="card container-fluid text-center" style={cardStyles}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h className="card-title fs-4">{title}</h>
        <p className="card-text fw-light">
          {description}
        </p>
      </div>
      <div className="card-footer"> <button className="btn btn-light btn btn-outline-warning">{buttonText}</button>
      </div>
    </div>
  );

};

export default Card;
