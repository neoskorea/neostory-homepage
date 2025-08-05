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
      title: "변환 전",
      subtitle: "스크롤 웹툰",
      description: "세로 스크롤 형태의 원본 웹툰",
      image: "/images/works/pan-1.png",
      alt: "판형화 전 - 스크롤 웹툰"
    },
    {
      id: 2,
      title: "변환 후",
      subtitle: "페이지 형태",
      description: "페이지 단위로 재구성된 완성본",
      image: "/images/works/pan-2.png",
      alt: "판형화 후 - 페이지 형태"
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
          스크롤 웹툰이 어떻게 페이지 형태로 변환되는지 확인해보세요
        </p>
      </div>

      {/* 메인 이미지 컨테이너 */}
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-white border border-gray-100 rounded overflow-hidden shadow-sm">
          {/* 헤더 */}
          <div className="border-b border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="text-xl font-light text-gray-900 mb-1">
                  {slides[currentSlide].title}
                </h5>
                <p className="text-sm font-light text-gray-500">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* 네비게이션 인디케이터 */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                        ? 'bg-[#93d1d3] w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    aria-label={`슬라이드 ${index + 1}로 이동`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 이미지 컨테이너 */}
          <div className="relative overflow-hidden" style={{ height: '70vh', minHeight: '500px' }}>
            <div
              className="flex transition-transform duration-1000 ease-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0 h-full">
                  <div className="w-full h-full bg-gray-50 flex items-center justify-center p-8">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      width={600}
                      height={800}
                      className="max-w-full max-h-full object-contain"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 하단 네비게이션 */}
          <div className="border-t border-gray-100 p-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                {slides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`text-sm font-light transition-colors duration-300 ${currentSlide === index
                        ? 'text-[#93d1d3]'
                        : 'text-gray-400 hover:text-gray-600'
                      }`}
                  >
                    {slide.subtitle}
                  </button>
                ))}
              </div>

              <div className="text-xs font-light text-gray-400">
                {currentSlide + 1} / {slides.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}