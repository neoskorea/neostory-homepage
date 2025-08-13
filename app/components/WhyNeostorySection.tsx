export default function WhyNeostorySection() {
  const features = [
    {
      title: "유일무이한 일본 네트워크",
      description: "일본 방송사, 출판사, 광고사와의 협업 네트워크를 통한 현지화 전문성",
      number: "01"
    },
    {
      title: "업계를 압도하는 인프라",
      description: "PD + 웹툰팀 + 해외 파트너십으로 구성된 통합 제작 시스템",
      number: "02"
    },
    {
      title: "콘텐츠의 극대화",
      description: "한•일•미 중심으로 다양한 플랫폼에서의 콘텐츠 확장 전략",
      number: "03"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-20">
          <div className="text-sm font-light tracking-[0.3em] text-gray-400 mb-4">
            WHY NEOSTORY
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            네오스토리만의 차별화된 경쟁력
          </h2>
        </div>

        {/* 피처 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="border-l border-gray-200 pl-8 py-8 hover:border-[#93d1d3] transition-colors duration-300">
                <div className="text-6xl font-light text-gray-100 group-hover:text-[#93d1d3]/20 transition-colors duration-300 mb-6">
                  {feature.number}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}