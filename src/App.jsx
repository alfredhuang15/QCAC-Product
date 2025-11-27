import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Reviews from './components/Reviews.jsx';
import AddReviewForm from './components/AddReviewForm.jsx';

export default function App() {
  return (
    <div>
      <Hero />
      <Features />
      <Reviews />
      <AddReviewForm />
    </div>
  );
}
