import React, { useEffect } from 'react';

const ParallaxImages = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const parallaxContainer = document.querySelector('.parallax-container');
      const rect = parallaxContainer.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (offsetX - centerX) / 15; // Ajusta la sensibilidad según tus preferencias
      const moveY = (offsetY - centerY) / 15;

      const parallaxImage1 = document.querySelector('.parallax-image-1');
      parallaxImage1.style.transform = `translate(${moveX}px, ${moveY}px)`;

      const parallaxImage2 = document.querySelector('.parallax-image-2');
      parallaxImage2.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
    };

    const handleMouseLeave = () => {
      const parallaxImage1 = document.querySelector('.parallax-image-1');
      parallaxImage1.style.transform = 'none';

      const parallaxImage2 = document.querySelector('.parallax-image-2');
      parallaxImage2.style.transform = 'none';
    };

    const parallaxContainer = document.querySelector('.parallax-container');
    parallaxContainer.addEventListener('mousemove', handleMouseMove);
    parallaxContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      parallaxContainer.removeEventListener('mousemove', handleMouseMove);
      parallaxContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax-image parallax-image-1"></div>
      <div className="parallax-image parallax-image-2"></div>
    </div>
  );
}

export default ParallaxImages;