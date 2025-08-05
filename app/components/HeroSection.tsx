import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* 로고 */}
        <div className="mb-12">
          <Image
            src="/images/logo/neostory-logo-mint.png"
            alt="Neostory Logo"
            width={400}
            height={160}
            priority
            className="mx-auto"
          />
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-gray-900 mb-8">
          <div className="text-sm md:text-base font-light tracking-wider text-gray-500 mb-6">
            CREATIVE CONTENT BRIDGE
          </div>
          <div className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
            웹툰에서 영상까지,
          </div>
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#93d1d3] mt-2">
            IP의 모든 가능성을
          </div>
          <div className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight mt-2">
            연결합니다
          </div>
        </h1>

        {/* 서브타이틀 */}
        <p className="text-base md:text-lg font-light text-gray-500 max-w-2xl mx-auto leading-relaxed">
          한국과 일본을 잇는 글로벌 콘텐츠 브릿지
        </p>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xs font-light mb-2 tracking-wider">SCROLL</span>
          <div className="w-px h-12 bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}