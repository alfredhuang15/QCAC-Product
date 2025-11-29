import React, { useEffect } from 'react';
import camera from '../assets/polaroid-camera.jpg';

export default function Hero() {

  return (
    <section style={{
      background: 'linear-gradient(135deg, #808080 0%, #000000 100%)',
      padding: '4rem 2rem',
      textAlign: 'center',
      color: 'white'
    }}>
      <h1 style={{
        fontSize: '3.5rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
      }}>
          Polaroid Camera
      </h1>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto 2rem',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <img src={camera} alt="Hero" style={{width: '100%', height: 'auto', display: 'block'}}/>
      </div>
      <p style={{
        fontSize: '1.3rem',
        maxWidth: '700px',
        margin: '0 auto',
        lineHeight: '1.8',
        opacity: '0.95'
      }}>
        This polaroid camera lets you take photos that print out instantly. Simply take a photo and watch it develop in your hands. Perfect for creating memories without a computer or printer!
      </p>
    </section>
  );
}
