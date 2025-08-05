export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#93d1d3] via-[#6bbfc2] to-[#4a9da1]">
      <div className="max-w-4xl mx-auto text-center">
        {/* 메인 텍스트 */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            함께할 파트너를
            <br />
            기다립니다
          </h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            네오스토리와 함께 IP의 무한한 가능성을 탐험하고
            <br />
            글로벌 콘텐츠 시장에서 새로운 성공을 만들어가세요
          </p>
        </div>

        {/* CTA 버튼들 */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-white hover:bg-gray-100 text-[#4a9da1] font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 min-w-[200px]">
            제작 제안하기
          </button>

          <button className="border-2 border-white hover:bg-white hover:text-[#4a9da1] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 min-w-[200px]">
            회사 소개서 다운로드
          </button>
        </div>

        {/* 연락처 정보 */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
            <div>
              <h3 className="font-semibold mb-2">이메일</h3>
              <p>contact@neostory.co.kr</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">전화</h3>
              <p>+82-2-1234-5678</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">주소</h3>
              <p>서울특별시 강남구</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}