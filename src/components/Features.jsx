import React from 'react';
import FeatureCard from './FeatureCard.jsx';

export default function Features() {
  const features = [
    "Capture and print your photos immediately",
    "Classic design with modern technology",
    "Easy to carry and use anywhere",
    "Vivid colors and sharp details",
    "Perfect for parties, travel, or scrapbooking — take a shot and watch your photo slowly appear like magic.",
    "Creates timeless instant prints you can share, display, or keep as personal mementos",
  ];

  return (
    <section style={{
      padding: '4rem 2rem',
      backgroundColor: '#F8F9FA'
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '3rem',
        color: '#2C3E50'
      }}>
        Features
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {features.map((feature, index) => (
            <FeatureCard key={index} description={feature}/>
        ))}
      </div>
    </section>
  );
}
