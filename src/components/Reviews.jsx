import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export default function Reviews({ reviews }) {

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
    <section style={{
      padding: '4rem 2rem',
      backgroundColor: 'white'
     }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '2rem',
        color: '#2C3E50'
      }}>
        Customer Reviews
      </h2>

      <div>
        {reviews.map((review, index) => (
          <div key={index} style={{
            backgroundColor: '#F8F9FA',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
           }}>
            <h3 style={{
              fontSize: '1.3rem',
              color: '#2C3E50',
              marginBottom: '0.5rem'
            }}>
              {review.name}
            </h3>
            <div style={{
              display: 'flex',
              gap: '0.3rem',
              marginBottom: '0.8rem'
            }}>
              Rating: {renderStars(review.rating)}
            </div>
              <p style={{
                color: '#555',
                fontSize: '1.05rem',
                lineHeight: '1.6',
                margin: 0
              }}>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}