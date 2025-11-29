import React, { useState} from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export default function AddReviewForm({ onAddReview }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hoverRating, setHoverRating] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating before submitting your review.");
      return;
    }
    const newReview = { name, rating: Number(rating), comment };
    onAddReview(newReview);
    setName("");
    setHoverRating(0);
    setRating(0);
    setComment("");
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
      <FaRegStar color="#ccc" />
    );

    hoverStars.push(
      <div key={i}
        style={{   position: "relative",
          width: "28px",
          height: "28px",
          display: "inline-block",
          marginRight: "5px", 
        }}>

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
            color: (hoverRating || rating) >= i || (hoverRating || rating) >= i - 0.5 ? "#ffc107" : "#ccc",
          }}>
            {icon}
        </span>
      </div>
    );
  }
  
  return (
   <div style={{
      backgroundColor: '#F8F9FA',
      padding: '4rem 2rem'
    }}>

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>

        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          color: '#2C3E50',
          textAlign: 'center'
        }}>
          Add Your Review
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <div>
              {hoverStars}
            </div>
          </div>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              padding: '1rem',
              fontSize: '1rem',
              border: '2px solid #E0E0E0',
              borderRadius: '8px',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#000000ff'}
            onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
          />

          <textarea
            placeholder="Your Review"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            style={{
              padding: '1rem',
              fontSize: '1rem',
              border: '2px solid #E0E0E0',
              borderRadius: '8px',
              minHeight: '120px',
              resize: 'vertical',
              outline: 'none',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => e.target.style.borderColor = '#000000ff'}
            onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
          />
          
          <button
            onClick={handleSubmit}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              backgroundColor: '#000000ff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#23252cff';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#000000ff';
              e.target.style.transform = 'translateY(0)'; 
              e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
            }}>
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}