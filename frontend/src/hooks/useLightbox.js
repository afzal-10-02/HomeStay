import { useState, useEffect, useCallback } from 'react';

export const useLightbox = (images = []) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const isOpen = currentImageIndex !== null;

  const openLightbox = (index) => setCurrentImageIndex(index);
  const closeLightbox = () => setCurrentImageIndex(null);

  const nextImage = useCallback(() => {
    if (isOpen) setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length, isOpen]);

  const prevImage = useCallback(() => {
    if (isOpen) setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, nextImage, prevImage]);

  return {
    isOpen,
    currentImage: isOpen ? images[currentImageIndex] : null,
    currentIndex: currentImageIndex,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage
  };
};