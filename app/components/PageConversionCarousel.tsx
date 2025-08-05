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
          {/* 헤더 - 단순화 */}
          <div className="border-b border-gray-100 p-4">
            <div className="flex items-center justify-center">
              <div className="text-2xl font-light text-gray-800">
                {slides[currentSlide].title}
              </div>
            </div>
          </div>

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

          {/* 하단 인디케이터 */}
          <div className="border-t border-gray-100 p-4">
            <div className="flex justify-center items-center gap-4">
              {/* 점 인디케이터 */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-[#93d1d3]' : 'bg-gray-300'
                      }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* 진행 바 */}
              <div className="flex-1 max-w-xs bg-gray-200 rounded-full h-1 mx-4">
                <div
                  className="bg-[#93d1d3] h-1 rounded-full transition-all duration-700 ease-in-out"
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}