import PageConversionCarousel from './PageConversionCarousel';

export default function PageConversionSection() {
  const advantages = [
    {
      title: "Story-Driven Approach",
      description: "스토리 흐름을 고려한 창의적 컷 재구성으로 원작의 감정을 극대화합니다"
    },
    {
      title: "Professional Expertise",
      description: "만화 전공 출신의 전문 편집진이 직접 작업하여 완성도 높은 결과물을 제공합니다"
    },
    {
      title: "Premium Quality",
      description: "양면 페이지 특성을 활용한 페이지 원고 수준의 완성도를 자랑합니다"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-20">
          <div className="text-sm font-light tracking-[0.3em] text-gray-400 mb-4">
            PAGE CONVERSION
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            판형화 외주
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            스크롤 웹툰을 페이지 형식으로 전환하는 전문 서비스
          </p>
        </div>

        {/* 차별점 도식화 */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-light text-center text-gray-900 mb-16">
            네오스토리 판형화의 차별점
          </h3>

          {/* SVG 벤다이어그램 */}
          <div className="flex justify-center items-center mb-16">
            <div className="w-full max-w-2xl">
              <svg viewBox="0 0 420 280" className="w-full h-auto max-w-lg mx-auto">
                <defs>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.1" />
                  </filter>
                </defs>

                {/* 왼쪽 원 */}
                <circle
                  cx="140"
                  cy="140"
                  r="110"
                  fill="#93d1d3"
                  fillOpacity="0.8"
                  stroke="#93d1d3"
                  strokeWidth="1"
                  filter="url(#shadow)"
                />

                {/* 오른쪽 원 */}
                <circle
                  cx="280"
                  cy="140"
                  r="110"
                  fill="#6b7280"
                  fillOpacity="0.8"
                  stroke="#6b7280"
                  strokeWidth="1"
                  filter="url(#shadow)"
                />

                {/* 왼쪽 원 텍스트 */}
                <text x="110" y="115" textAnchor="middle" fill="white" fontSize="12" fontWeight="400">
                  <tspan x="110" dy="0">스토리를 고려한</tspan>
                  <tspan x="110" dy="16">컷 구성과</tspan>
                  <tspan x="110" dy="16">스크롤 연출을</tspan>
                  <tspan x="110" dy="16">페이지 연출로</tspan>
                  <tspan x="110" dy="16">변환하는 작업</tspan>
                </text>

                {/* 오른쪽 원 텍스트 */}
                <text x="310" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="400">
                  <tspan x="310" dy="0">만화 전공</tspan>
                  <tspan x="310" dy="16">작업자의</tspan>
                  <tspan x="310" dy="16">그림 편집 스킬</tspan>
                </text>

                {/* 겹치는 부분 텍스트 */}
                <text x="210" y="130" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">
                  <tspan x="210" dy="0">페이지 원고</tspan>
                  <tspan x="210" dy="14">처럼 보이는</tspan>
                  <tspan x="210" dy="14">결과물</tspan>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* 실제 변환 예시 캐로우셀 */}
        <PageConversionCarousel />

        {/* 핵심 장점 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded border border-gray-100 p-8">
              <div className="text-6xl font-light text-gray-100 mb-6">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                {advantage.title}
              </h4>
              <p className="text-gray-600 font-light leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}