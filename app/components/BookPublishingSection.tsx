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

        {/* 출간물 이미지 - 좌우 꽉 채움 */}
        <div className="max-w-6xl mx-auto">
          {/* 표지 */}
          <div className="mb-16">
            <div className="text-sm font-light text-gray-400 mb-6 tracking-wider text-center">
              COVER DESIGN
            </div>
            <div className="w-full">
              <Image
                src="/images/works/img11_neostory_book.png"
                alt="단행본 표지"
                width={800}
                height={600}
                className="w-full h-auto object-contain rounded"
              />
            </div>
          </div>

          {/* 내지 */}
          <div>
            <div className="text-sm font-light text-gray-400 mb-6 tracking-wider text-center">
              INTERIOR
            </div>
            <div className="w-full">
              <Image
                src="/images/works/img12_neostory_book2.png"
                alt="단행본 내지"
                width={800}
                height={600}
                className="w-full h-auto object-contain rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}