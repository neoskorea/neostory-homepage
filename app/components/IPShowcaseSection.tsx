import Image from "next/image";
import React from "react";

export default function IPShowcaseSection() {
  const ipData = [
    {
      title: "DELETE",
      category: "연재중",
      status: "ongoing",
      author: "글 네오스토리 / 그림 이시카와 세이코",
      description: `"당신은, 당신의 인생을 삭제하시겠습니까?"
인생을 삭제한 다섯 명의 인물은 '황금 찜질방'에서 새로운 삶을 꿈꾼다.
그런데 시간이 지날 수록 무언가 이상하다.`,
      image: "/images/works/img1_neostory_works_delete.png",
      tags: ["네오스토리 오리지널 IP", "한일미 동시 연재"]
    },
    {
      title: "26번째 살인",
      category: "완결작",
      status: "completed",
      author: "글 수오 / 그림 아비디 이노우에",
      description: `수많은 사람들을 무참히 살해한 전대미문의 연쇄 살인마 '살아있는 악마' 장필두.
그런데 뇌진탕으로 혼수상태에 빠지고 만다.
아무것도 기억하지 못하는 사형수.`,
      image: "/images/works/img2_neostory_works_26th_m.png",
      tags: ["드라마 제작 확정"]
    },
    {
      title: "나를 기억하나요",
      category: "완결작",
      status: "completed",
      author: "글/그림 히가시무라 아키코",
      description: `"나를 기억하나요?"
서른 살이 된 현실에 치여 사는 연예부 기자 지현.
순수했던 어린 시절 추억을 되새기며, 17년 전 첫사랑 지민을 찾는다.`,
      image: "/images/works/img3_neostory_works_remember.png",
      tags: ["드라마 제작 확정", "세계 최초 한/일 동시 연재"]
    },
    {
      title: "엘피스",
      category: "예정작",
      status: "upcoming",
      author: "와타나베 아야 작가 원작",
      description: `사회고발 미스터리 추적극으로, 좌천된 앵커와 예능국 PD가
무고죄로 복역 중인 사내의 사건을 추적하며 벌어지는 이야기를
한국 실정에 맞게 각색하여 리메이크 제작 예정`,
      image: "/images/works/img4_neostory_elpis.png",
      tags: ["2025년 하반기 연재 예정"],
      workflow: ["일본 히트 드라마", "웹툰 제작 (각색)", "한국 드라마 리메이크"]
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-20">
          <div className="text-sm font-light tracking-[0.3em] text-gray-400 mb-4">
            ORIGINAL IP
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            네오스토리 Original IP
          </h2>

          {/* 크로스 컬처 설명 */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="text-sm font-light tracking-wider text-gray-600 bg-gray-100 px-4 py-2 rounded">
              한국 스토리
            </div>
            <div className="text-[#93d1d3] text-2xl">×</div>
            <div className="text-sm font-light tracking-wider text-gray-600 bg-gray-100 px-4 py-2 rounded">
              일본 작화
            </div>
          </div>
          <p className="text-sm font-light text-gray-500">
            Cross-Culture Content
          </p>
        </div>

        {/* IP 그리드 */}
        <div className="space-y-24">
          {ipData.map((ip, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
            >
              {/* 이미지 */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="aspect-[3/4] overflow-hidden rounded bg-gray-50">
                  <Image
                    src={ip.image}
                    alt={ip.title}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 콘텐츠 */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl font-light text-gray-900">{ip.title}</h3>
                  <span className={`px-3 py-1 rounded text-xs font-light tracking-wider ${ip.status === 'ongoing' ? 'bg-green-100 text-green-700' :
                      ip.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                        'bg-orange-100 text-orange-700'
                    }`}>
                    {ip.category}
                  </span>
                </div>

                <p className="text-sm font-light text-gray-500 mb-6">{ip.author}</p>

                <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line font-light">
                  {ip.description}
                </p>

                {/* 워크플로우 (엘피스용) */}
                {ip.workflow && (
                  <div className="mb-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      {ip.workflow.map((step, stepIndex) => (
                        <React.Fragment key={stepIndex}>
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded font-light">
                            {step}
                          </span>
                          {stepIndex < ip.workflow!.length - 1 && (
                            <span className="text-gray-400">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* 태그들 */}
                <div className="flex flex-wrap gap-2">
                  {ip.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-light text-gray-600 border border-gray-200 px-3 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}