import React from 'react';
import camera from '../assets/polaroid-camera.jpg';

export default function Hero() {
  return (
    <section style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Polaroid Camera</h1>
      <img src={camera} alt="Hero" style={{ maxWidth: '15%', height: 'auto' }} />
      <p>This polaroid camera lets you take photos that print out instantly. Simply take a photo and watch it develop in your hands. Perfect for creating memories without a computer or printer!</p>
      <p></p>
    </section>
  );
}
