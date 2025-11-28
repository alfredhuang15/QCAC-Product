import React from "react";
import reviews from "../data/sampleReviews.json";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export default function Reviews() {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);

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

  const starDisplay = hoverRating || rating;

  const hoverStars = [];
  for (let i = 1; i <= 5; i++) {
    const fill = starDisplay;

    const icon = 
    fill >= i ? (
      <FaStar color="#ffc107" />
    ) : fill >= i - 0.5 ? (
      <FaStarHalfAlt color="#ffc107" />
    ) : (
      <FaRegStar color="#ffc107" />
    );

    hoverStars.push(
      <div key={i}
        style={{   position: "relative",
          width: "28px",
          height: "28px",
          display: "inline-block",
          marginRight: "5px", }}
        >
        <span
          style={{ position: "absolute",
            left: 0,
            width: "50%",
            height: "100%",
            cursor: "pointer",
            zIndex: 2}}
          onMouseEnter={() => setHoverRating(i - 0.5)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => setRating(i - 0.5)}
        />

        <span
          style={{ position: "absolute",
            right: 0,
            width: "50%",
            height: "100%",
            cursor: "pointer",
            zIndex: 2, }}
          onMouseEnter={() => setHoverRating(i)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => setRating(i)}
        />
        <span
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            fontSize: "28px",
            pointerEvents: "none",
            color: "#ffc107",
          }}
        >{icon}</span>
      </div>
    );
  }

  return (
    <section style={{ padding: "20px" }}>
      <h2>Customer Ratings</h2>

      <div>
        {hoverStars}
      </div>

      <div>
        {reviews.map((review, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <h3>{review.name}</h3>
            <p>Rating: {renderStars(review.rating)}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}