'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function PageConversionCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: 1,
      title: "1",
      subtitle: "",
      description: "",
      image: "/images/works/pan-1.png",
      alt: "판형화 예시 1"
    },
    {
      id: 2,
      title: "2",
      subtitle: "",
      description: "",
      image: "/images/works/pan-2.png",
      alt: "판형화 예시 2"
    }
  ];

  // Intersection Observer로 섹션 진입 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 섹션이 보일 때 자동 슬라이드
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setCurrentSlide(1);
    }, 1500); // 1.5초 후 두 번째 이미지로

    return () => clearTimeout(timer);
  }, [isVisible]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="mb-24" ref={carouselRef}>
      {/* 섹션 헤더 */}
      <div className="text-center mb-16">
        <div className="text-sm font-light tracking-[0.3em] text-gray-400 mb-4">
          CONVERSION PROCESS
        </div>
        <h4 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
          실제 변환 예시
        </h4>
        <p className="text-gray-600 font-light max-w-2xl mx-auto">
          변환 전후 과정을 비교해서 확인해보세요
        </p>
      </div>

      {/* 메인 이미지 컨테이너 - 전체 너비로 확장 */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative bg-white border border-gray-100 rounded overflow-hidden shadow-sm">

          {/* 이미지 슬라이더 - 좌우 꽉 채움 */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="w-full">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* 좌우 화살표 */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}