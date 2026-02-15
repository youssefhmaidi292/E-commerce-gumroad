import { useState, useEffect, useCallback } from 'react';
import '../../styles/home/HeroSlider.css';

import hero from '../../assets/HeroSlider/hero.png';
import hero1 from '../../assets/HeroSlider/hero1.png';
import hero2 from '../../assets/HeroSlider/hero2.png';

interface Slide {
  id: number;
  brand: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: string;
  theme: string;
}

const slides: Slide[] = [
  {
    id: 1,
    brand: 'Beats Solo',
    title: 'Wireless',
    subtitle: 'HEADPHONE',
    description: 'Experience high-quality sound with active noise cancellation',
    buttonText: 'Shop By Category',
    image: hero,
    theme: 'red'
  },
  {
    id: 2,
    brand: 'Oculus Quest',
    title: 'Virtual Reality',
    subtitle: 'VR GEAR',
    description: 'Dive into the metaverse with all-in-one VR',
    buttonText: 'Shop VR',
    image: hero1,
    theme: 'purple'
  },
  {
    id: 3,
    brand: 'Apple MacBook',
    title: 'Pro M3',
    subtitle: 'COMPUTER',
    description: 'Supercharged by M3 chip. Next-level performance',
    buttonText: 'Shop Computers',
    image: hero2,
    theme: 'blue'
  }
];

function HeroSlider(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const nextSlide = useCallback((): void => {
    setCurrentSlide((prev: number) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div
        className="hero-slider-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide: Slide, index: number) => (
          <div
            key={slide.id}
            className={`hero-slide theme-${slide.theme} ${
              index === currentSlide ? 'active' : ''
            }`}
          >
            <div className="hero-watermark">{slide.subtitle}</div>

            <div className="hero-content">
              <div className="hero-text">
                <span className="hero-brand">{slide.brand}</span>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-description">{slide.description}</p>
                <button className="hero-button">
                  {slide.buttonText}
                </button>
              </div>

              <div className="hero-image-container">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-dots">
        {slides.map((_, index: number) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
