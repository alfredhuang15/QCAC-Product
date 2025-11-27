import React from 'react';

export default function Features() {
  const features = [
    'Instant Prints: Capture and print your photos immediately',
    'Retro Look: Classic design with modern technology',
    'Compact and Portable: Easy to carry and use anywhere',
    'High-Quality Photos: Vivid colors and sharp details',
  ];
  return (
    <section style={{ padding: '20px' }}>
      <h2>Features</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </section>
  );
}
