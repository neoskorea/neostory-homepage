import Image from "next/image";

export default function EpubServiceSection() {
  const epubServices = [
    {
      title: "Japanese EPUB",
      language: "日本語",
      coverImage: "/images/works/img5_neostory_epub_26th_1.png",
      contentImages: [
        "/images/works/img6_neostory_epub_26th_2.png",
        "/images/works/img7_neostory_epub_26th_3.png"
      ]
    },
    {
      title: "English EPUB",
      language: "English",
      coverImage: "/images/works/img8_neostory_epub_delete_1.png",
      contentImages: [
        "/images/works/img9_neostory_epub_delete_2.png",
        "/images/works/img10_neostory_epub_delete_3.png"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-20">
          <div className="text-sm font-light tracking-[0.3em] text-gray-400 mb-4">
            GLOBAL DISTRIBUTION
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            EPUB 서비스
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            다국어 전자책 서비스로 글로벌 독자들에게 다가갑니다
          </p>
        </div>

        {/* EPUB 서비스 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {epubServices.map((service, index) => (
            <div key={index} className="bg-white rounded border border-gray-100">
              {/* 헤더 */}
              <div className="border-b border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm font-light text-gray-500">
                      {service.language}
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
              </div>

              {/* 콘텐츠 */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  {/* 표지 */}
                  <div className="col-span-1">
                    <div className="text-xs font-light text-gray-400 mb-3 tracking-wider">
                      COVER
                    </div>
                    <div className="aspect-[3/4] bg-gray-50 rounded overflow-hidden">
                      <Image
                        src={service.coverImage}
                        alt={`${service.title} 표지`}
                        width={120}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* 내용 */}
                  <div className="col-span-2">
                    <div className="text-xs font-light text-gray-400 mb-3 tracking-wider">
                      CONTENT
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {service.contentImages.map((image, imageIndex) => (
                        <div key={imageIndex} className="aspect-[3/4] bg-gray-50 rounded overflow-hidden">
                          <Image
                            src={image}
                            alt={`${service.title} 내용 ${imageIndex + 1}`}
                            width={100}
                            height={133}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 설명 */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              Global EPUB Service
            </h3>
            <p className="text-gray-600 leading-relaxed font-light">
              네오스토리의 오리지널 IP를 다양한 언어로 제공하여
              전 세계 독자들이 언어의 장벽 없이 우리의 콘텐츠를 즐길 수 있도록 합니다.
              일본어와 영어를 시작으로 더 많은 언어로 서비스를 확장해 나가고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}