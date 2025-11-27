import React, { useState} from "react";

export default function AddReviewForm({ onAddReview }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { name, rating: Number(rating), comment };
    onAddReview(newReview);
    setName("");
    setRating(5);
    setComment("");
  };
  
  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h2>Add a Review</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        >
        {[5, 4, 3, 2, 1].map((star) => (
          <option key={star} value={star}>{star} Star{star > 1 ? 's' : ''}</option>
        ))}
      </select>
      <textarea
        placeholder="Your Review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button type="submit">
        Submit Review
      </button>
    </form>
  );
} 
