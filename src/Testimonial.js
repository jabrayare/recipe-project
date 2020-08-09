import React from "react";

function Testimonial({
  reviewedAt,
  heading,
  name,
  occapation,
  image,
  testimonial,
  rating,
}) {
  return (
    <div className="testimonial">
      <div className="testimonial-left">
        <img className="testimonial-image" src={image} alt="user" />
        <div className="name-occapation">
          <h2 className="testimonial-name">{name}</h2>
          <h4 className="testimonial-occapation">{occapation}</h4>
        </div>
      </div>
      <div className="testimonial-right">
        <div>
          <div className="rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>🌟</p>
              ))}
            <p className="reviewedAt">{reviewedAt}</p>
          </div>
        </div>
        <h5 className="testimonial-heading">{heading}</h5>
        <p className="testimonial-text">{testimonial}</p>
      </div>
    </div>
  );
}

export default Testimonial;
