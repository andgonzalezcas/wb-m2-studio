import { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[1000] overflow-hidden" onClick={onClose}>
      <div className="w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

interface CarouselProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

export const Carousel = ({ images, initialIndex = 0, onClose }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleContainerClick = (e: React.MouseEvent) => {
    // Solo cerrar si el click fue directamente en el contenedor o en la imagen
    if (e.target === e.currentTarget || (e.target as HTMLElement).tagName === 'IMG') {
      onClose();
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-[90%] mx-auto flex flex-col h-screen justify-center" onClick={handleContainerClick}>
      <div className="relative overflow-hidden w-full h-[60vh] my-12">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-600 ease-in-out ${
              index === currentIndex ? 'opacity-100 relative' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      
      <button 
        className="absolute top-1/2 -translate-y-1/2 left-0 bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-[2] hover:bg-black/70" 
        onClick={(e) => { e.stopPropagation(); goToPrev(); }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        className="absolute top-1/2 -translate-y-1/2 right-0 bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-[2] hover:bg-black/70" 
        onClick={(e) => { e.stopPropagation(); goToNext(); }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="fixed bottom-0 left-0 right-0 flex justify-center gap-[10px] pb-8" onClick={e => e.stopPropagation()}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
