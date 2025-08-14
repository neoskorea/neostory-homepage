export default function HistorySection() {
  const historyData = [
    {
      year: "2020",
      events: [
        "나를 기억하나요 연재",
        "나를 기억하나요 단행본 출간"
      ]
    },
    {
      year: "2021",
      events: [
        "26번째 살인 연재"
      ]
    },
    {
      year: "2022",
      events: [
        "나를 기억하나요 드라마 제작 확정",
        "26번째 살인 드라마 제작 확정",
        "히가시무라 아키코 NFT 전시회 개최"
      ]
    },
    {
      year: "2023",
      events: [
        "DELETE 연재"
      ]
    },
    {
      year: "2024",
      events: [
        "판형화 외주 작업 시작"
      ]
    },
    {
      year: "2025",
      events: [
        "엘피스 웹툰 제작 예정"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16 md:mb-20">
          <div className="text-xs sm:text-sm font-light tracking-[0.25em] sm:tracking-[0.3em] text-gray-400 mb-3 sm:mb-4">
            OUR JOURNEY
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-gray-900 mb-4 md:mb-6 leading-snug break-keep">
            네오스토리의 성장과 혁신의 발자취
          </h2>
        </div>

        {/* 타임라인 */}
        <div className="relative">
          {/* 중앙 세로 라인 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-200 h-full hidden lg:block"></div>

          <div className="space-y-16 lg:space-y-24">
            {historyData.map((item, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center">
                {/* 연도 (항상 왼쪽) */}
                <div className="flex-1 text-center lg:text-right lg:pr-16 mb-8 lg:mb-0">
                  <div className="text-4xl sm:text-5xl md:text-7xl font-light text-[#93d1d3]">
                    {item.year}
                  </div>
                </div>

                {/* 중앙 점 */}
                <div className="relative z-10 w-4 h-4 bg-[#93d1d3] rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                {/* 이벤트 (항상 오른쪽) */}
                <div className="flex-1 text-center lg:text-left lg:pl-16">
                  <div className="space-y-3">
                    {item.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="text-gray-600 leading-relaxed">
                        {event}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}