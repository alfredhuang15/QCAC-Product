import React from 'react';

export default function FeatureCard({  description }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={{

      flex: '1 1 250px',
      backgroundColor: '#1E1E1E',
      borderRadius: '16px',
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      minHeight: '180px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0)',
      boxShadow: isHovered ? '0 15px 40px rgba(22, 24, 34, 0.4)' : '0 4px 15px rgba(0,0,0,0.2)',
    }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p style={{
        fontSize: '1.2rem',
        fontWeight: '500',
        color: '#E0E0E0',
        lineHeight: '1.6',
        margin: 0
      }}>
        {description}
      </p>
    </div>
  );
}