import React from "react";
import Review from "./Review.css";
import Testimonial from "./Testimonial.js";
function Reviews({ rating }) {
  return (
    <div className="review-card">
      {/* Reviews */}
      <h3 className="review-header">Reviews</h3>
      <div className="rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>🌟</p>
          ))}
      </div>
      {/* three pics and reviews */}
      <Testimonial
        rating={5}
        reviewedAt="Review at January 12, 2020"
        name="John Jama"
        occapation="CEO at Waji Washkax"
        image="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        heading="Good Surprise! Delicious food"
        testimonial="The food was amazing. I will definately come back"
      />
      <Testimonial
        rating={5}
        reviewedAt="Review at January 12, 2020"
        name="Olivia Smith"
        occapation="Manager at Maxirumba"
        image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        heading="Wonderful food and excellent service"
        testimonial="I enjoyed eating from this place. I would recommend it."
      />
      <Testimonial
        rating={5}
        reviewedAt="Review at January 12, 2020"
        name="Lucus Noah"
        occapation="Supervisor at spaceX"
        image="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        heading="Good food even better service"
        testimonial="Great place to have a dinner. Give it a try, you will enjoy the food there!"
      />
    </div>
  );
}

export default Reviews;
