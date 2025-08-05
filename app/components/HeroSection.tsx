"use client"; // 이 컴포넌트가 클라이언트 측에서 실행됨을 명시합니다.

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Particle 클래스 정의
    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    let particlesArray: Particle[] = [];

    const init = () => {
      if (!canvas) return;
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 12000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 1.5) + 0.5;
        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.3) - 0.15;
        let directionY = (Math.random() * 0.3) - 0.15;
        let color = 'rgba(77, 182, 172, 0.6)'; // 더 투명하게
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const connect = () => {
      if (!ctx || !canvas) return;
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const particleA = particlesArray[a];
          const particleB = particlesArray[b];
          let distance = ((particleA.x - particleB.x) ** 2) + ((particleA.y - particleB.y) ** 2);
          // 연결선 거리를 20% 줄임 (8 -> 10으로 증가하여 연결 조건을 더 엄격하게)
          if (distance < (canvas.width / 10) * (canvas.height / 10)) {
            opacityValue = 1 - (distance / 30000); // 거리 기준도 조정
            ctx.strokeStyle = `rgba(77, 182, 172, ${opacityValue * 0.25})`; // 더 투명한 연결선
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(p => p.update());
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    handleResize(); // 초기 사이즈 설정 및 파티클 생성
    animate();

    window.addEventListener('resize', handleResize);

    // 클린업 함수
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // 페이드인 효과를 위한 useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // 100ms 후 페이드인 시작

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      <div className={`relative z-10 text-center max-w-6xl mx-auto px-4 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
        <div className={`mb-12 transition-all duration-1200 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
          <Image
            src="/images/logo/neostory-logo-mint.png"
            alt="Neostory Logo"
            width={400}
            height={160}
            priority
            className="mx-auto"
          />
        </div>
        <h1 className={`text-gray-900 mb-8 transition-all duration-1000 ease-out delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
          <div className="text-sm md:text-base font-light tracking-wider text-gray-500 mb-6">
            CREATIVE CONTENT BRIDGE
          </div>
          <div className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
            웹툰에서 영상까지,
          </div>
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#4DB6AC] mt-2">
            IP의 모든 가능성을
          </div>
          <div className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight mt-2">
            연결합니다
          </div>
        </h1>
        <p className={`text-base md:text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          한국과 일본을 잇는 글로벌 콘텐츠 브릿지
        </p>
      </div>
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-1000 ease-out delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
        <div className="flex flex-col items-center text-gray-500">
          <span className="text-xs font-light mb-2 tracking-wider">SCROLL</span>
          <div className="w-px h-12 bg-gray-400"></div>
        </div>
      </div>
    </section>
  );
}
