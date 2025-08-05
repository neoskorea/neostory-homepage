import Image from "next/image";

export default function BookPublishingSection() {
  const achievements = [
    {
      number: "40,000",
      unit: "부",
      description: "일본 초판 발행 부수"
    },
    {
      number: "3",
      unit: "개국",
      description: "다국가 동시 출간"
    },
    {
      number: "Premium",
      unit: "Quality",
      description: "프리미엄 편집 품질"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-20">
          <div className="text-sm font-light tracking-[0.3em] text-gray-400 mb-4">
            PUBLISHING
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            단행본 출간
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            글로벌 시장을 향한 고품질 단행본 출간 서비스
          </p>
        </div>

        {/* 성과 지표 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="border-l border-gray-200 pl-8 py-8">
                <div className="text-4xl md:text-5xl font-light text-[#93d1d3] mb-2">
                  {achievement.number}
                  <span className="text-2xl text-gray-400 ml-1">{achievement.unit}</span>
                </div>
                <p className="text-gray-600 font-light">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 출간물 이미지 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 이미지 그리드 */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-xs font-light text-gray-400 mb-3 tracking-wider">
                  COVER DESIGN
                </div>
                <div className="aspect-[3/4] bg-gray-50 rounded overflow-hidden">
                  <Image
                    src="/images/works/img11_neostory_book.png"
                    alt="단행본 표지"
                    width={200}
                    height={267}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="text-xs font-light text-gray-400 mb-3 tracking-wider">
                  INTERIOR
                </div>
                <div className="aspect-[3/4] bg-gray-50 rounded overflow-hidden">
                  <Image
                    src="/images/works/img12_neostory_book2.png"
                    alt="단행본 내지"
                    width={200}
                    height={267}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 텍스트 콘텐츠 */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-light text-gray-900 mb-8">
              글로벌 출간 전략
            </h3>

            <div className="space-y-6">
              <div className="border-l border-gray-200 pl-6">
                <h4 className="font-medium text-gray-900 mb-2">
                  현지화 전문성
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  단순한 번역을 넘어서 각 국가의 문화와 독자 취향에 맞는
                  로컬라이징을 통해 진정한 글로벌 콘텐츠를 만들어갑니다.
                </p>
              </div>

              <div className="border-l border-gray-200 pl-6">
                <h4 className="font-medium text-gray-900 mb-2">
                  프리미엄 품질
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  표지부터 내지까지 모든 요소에서 완벽한 퀄리티를 추구하며,
                  독자들에게 최상의 독서 경험을 제공합니다.
                </p>
              </div>

              <div className="border-l border-gray-200 pl-6">
                <h4 className="font-medium text-gray-900 mb-2">
                  확장 가능성
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  일본과 프랑스에서의 성공적인 출간을 바탕으로
                  미국, 독일 등 더 많은 국가로 확장해 나가고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}