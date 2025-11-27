import React from "react";
import reviews from "../data/sampleReviews.json";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export default function Reviews() {
  const renderStars = (rating) => {
    const stars = [];
    const totalStars = 5;
    let i = 0;
    while (i < totalStars) {
      if (rating >= i + 1)  {
        stars.push(<FaStar key={i} color="#ffc107" />);
    } else if (rating >= i + 0.5) {
        stars.push(<FaStarHalfAlt key={i} color="#ffc107" />);
      } else {
        stars.push(<FaRegStar key={i} color="#ffc107" />);
      }
      i++;
    }
    return stars;
  };

  return (
    <section style={{ padding: "20px" }}>
      <h2>Customer Ratings</h2>

      <div>
        {reviews.map((review, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <h3>{review.title}</h3>
            <p>Rating: {renderStars(review.rating)}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}