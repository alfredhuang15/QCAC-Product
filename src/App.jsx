import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Reviews from './components/Reviews.jsx';
import AddReviewForm from './components/AddReviewForm.jsx';
import sampleReviews from './data/sampleReviews.json';

export default function App() {
  const [reviews, setReviews] = React.useState(sampleReviews);

  React.useEffect(() => {
    try {
      const storedReviews = localStorage.getItem('reviews');

      if (storedReviews) {
        setReviews(JSON.parse(storedReviews));
        
      } else {
        localStorage.setItem('reviews', JSON.stringify(sampleReviews));
        setReviews(sampleReviews);
      }
    } catch (error) {
      console.error("Error loading reviews from localStorage:", error);
    }
    },[]);

    const handleAddReview = (newReview) => {
      try {
        const storedReviews = localStorage.getItem('reviews');
        let userReviews = storedReviews ? JSON.parse(storedReviews) : [];
        userReviews.push(newReview);
        localStorage.setItem('reviews', JSON.stringify(userReviews));
        setReviews((prev) => [...prev, newReview]);

      } catch (error) {
        console.error("Error saving review to localStorage:", error);
      }
    };

  return (
    <div style = {{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",',
      minHeight: '100vh',
      backgroundColor: 'white'
    }}>
      <Hero />
      <Features />
      <Reviews reviews = {reviews}/>
      <AddReviewForm onAddReview={handleAddReview} />
    </div>
  );
}
