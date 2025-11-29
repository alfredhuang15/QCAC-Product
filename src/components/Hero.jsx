import React, { useEffect } from 'react';
import camera from '../assets/polaroid-camera.jpg';

export default function Hero() {

  return (
    <section style={{
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      textAlign: "center",
      paddingTop: "5%",
      paddingLeft: "5%",
      paddingRight: "5%",
      boxSizing: "border-box",
       }}>
      <h1  style={{ 
        fontSize: "clamp(2rem, 6vw, 4rem)",
        marginBottom: "2%",
        fontWeight: "700",
        width: "100%",
        maxWidth: "800px",
      }}
          >
          Polaroid Camera
      </h1>
      <img src={camera} alt="Hero" style={{  
        width: "40%",
        maxWidth: "800px",
        height: "auto",
        borderRadius: "12px",
        marginBottom: "2%", 
        }} />
      <p  style={{
        maxWidth: "600px",
        fontSize: "clamp(1rem, 3vw, 1.3rem)",
        opacity: 0.85,
        lineHeight: 1.6,
        }}>
            This polaroid camera lets you take photos that print out instantly. Simply take a photo and watch it develop in your hands. Perfect for creating memories without a computer or printer!
      </p>
    </section>
  );
}
