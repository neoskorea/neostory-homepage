'use client';

import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

interface NewsData {
  news: NewsItem[];
}

export default function NewsSection() {
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardWidthRef = useRef<number>(0);
  const gapRef = useRef<number>(24); // gap-6
  const [cardsPerView, setCardsPerView] = useState<number>(3);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const initializedRef = useRef<boolean>(false);
  const [failedImageIds, setFailedImageIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch('/data/news.json');
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error('뉴스 데이터를 불러오는데 실패했습니다:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // 카테고리 뱃지는 제거 요청으로 미사용

  const measureLayout = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const width = viewport.clientWidth;
    let per = 3;
    if (width < 480) {
      per = 1;
    } else if (width < 1024) {
      per = 2;
    } else {
      per = 3;
    }
    setCardsPerView(per);
    const gap = gapRef.current;
    const totalGap = gap * (per - 1);
    const cardWidth = Math.max(200, Math.floor((width - totalGap) / per));
    cardWidthRef.current = cardWidth;
  }, []);

  const baseLength = newsData?.news?.length ?? 0;
  const tripledLength = baseLength * 3;

  const goToIndex = useCallback((nextIndex: number) => {
    if (baseLength === 0) return;
    setIsAnimating(true);
    setCurrentIndex(nextIndex);
  }, [baseLength]);

  const scrollNext = useCallback(() => {
    if (baseLength === 0 || isAnimating) return;
    goToIndex(currentIndex + 1);
  }, [currentIndex, baseLength, goToIndex, isAnimating]);

  const scrollPrev = useCallback(() => {
    if (baseLength === 0 || isAnimating) return;
    goToIndex(currentIndex - 1);
  }, [currentIndex, baseLength, goToIndex, isAnimating]);

  // 초기 인덱스를 가운데 세트로 이동
  useEffect(() => {
    if (!initializedRef.current && baseLength > 0) {
      initializedRef.current = true;
      setCurrentIndex(baseLength);
    }
  }, [baseLength]);

  // 초기 페인트 전에 사이즈 계산하여 카드가 0px로 보이지 않게 함
  useLayoutEffect(() => {
    measureLayout();
    // 데이터가 로드된 후에도 한 번 더 측정
    // (폰트 로딩, 레이아웃 변동 등으로 초기 크기가 달라질 수 있음)
    setTimeout(measureLayout, 0);
  }, [measureLayout]);

  useEffect(() => {
    const handleResize = () => measureLayout();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [measureLayout]);

  // 뉴스 데이터가 바뀌면 다시 측정 (초기 로드 포함)
  useEffect(() => {
    measureLayout();
  }, [newsData, measureLayout]);

  // 애니메이션 완료 후 중앙 세트로 점프하여 무한 유지
  const handleTransitionEnd = useCallback(() => {
    if (baseLength === 0) return;
    let index = currentIndex;
    let changed = false;
    if (index >= baseLength * 2) {
      index = index - baseLength;
      changed = true;
    } else if (index < baseLength) {
      index = index + baseLength;
      changed = true;
    }
    // 전환 종료 후 항상 클릭 가능 상태로 복원
    setIsAnimating(false);
    if (changed) {
      // transition 없이 즉시 중앙 세트로 점프
      setCurrentIndex(index);
    }
  }, [currentIndex, baseLength]);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mint mx-auto"></div>
            <p className="mt-4 text-gray-600">뉴스를 불러오는 중...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!newsData) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600">뉴스를 불러올 수 없습니다.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-14">
          <div className="text-sm font-light tracking-[0.3em] text-gray-400 mb-4">
            NEWS
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            네오스토리 소식
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            최신 업데이트와 소식을 확인하세요
          </p>
        </div>

        {/* 캐러셀 */}
        <div className="relative">
          <div ref={viewportRef} className="overflow-x-hidden overflow-y-visible pb-4 md:pb-6">
            <div
              ref={trackRef}
              className="flex items-stretch"
              style={{
                gap: `${gapRef.current}px`,
                transform: `translateX(-${currentIndex * (cardWidthRef.current + gapRef.current)}px)`,
                transition: isAnimating ? 'transform 400ms ease' : 'none'
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {newsData.news.concat(newsData.news, newsData.news).map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="news-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  style={{ width: `${cardWidthRef.current || 280}px`, flex: '0 0 auto' }}
                  onClick={() => setSelectedNews(item)}
                >
                  {/* 이미지(16:9) */}
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    {!item.image || failedImageIds.has(item.id) ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#93d1d3] to-[#6bbfc2]" />
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        onError={() => {
                          setFailedImageIds(prev => new Set(prev).add(item.id));
                        }}
                        sizes="(max-width: 479px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        priority={idx < 3}
                      />
                    )}
                  </div>

                  {/* 본문: 날짜 + 제목 */}
                  <div className="p-5">
                    <div className="text-sm text-gray-500 mb-2">
                      {formatDate(item.date)}
                    </div>
                    <h3 className="text-lg md:text-xl font-medium text-gray-900 line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 좌우 네비게이션 */}
          <button
            aria-label="이전"
            onClick={scrollPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 shadow rounded-full p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M15.53 4.47a.75.75 0 010 1.06L9.06 12l6.47 6.47a.75.75 0 11-1.06 1.06l-7-7a.75.75 0 010-1.06l7-7a.75.75 0 011.06 0z" clipRule="evenodd" /></svg>
          </button>
          <button
            aria-label="다음"
            onClick={scrollNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 shadow rounded-full p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M8.47 19.53a.75.75 0 010-1.06L14.94 12 8.47 5.53a.75.75 0 111.06-1.06l7 7a.75.75 0 010 1.06l-7 7a.75.75 0 01-1.06 0z" clipRule="evenodd" /></svg>
          </button>
        </div>
      </div>

      {/* 뉴스 모달 */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-end items-start mb-4">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedNews.title}
              </h2>

              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span>{formatDate(selectedNews.date)}</span>
              </div>

              {/* 모달 이미지 (16:9) */}
              <div className="relative w-full mb-6" style={{ paddingTop: '56.25%' }}>
                {!selectedNews.image || failedImageIds.has(selectedNews.id) ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#93d1d3] to-[#6bbfc2] rounded" />
                ) : (
                  <Image
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    fill
                    className="object-cover rounded"
                    onError={() => {
                      setFailedImageIds(prev => new Set(prev).add(selectedNews.id));
                    }}
                    sizes="100vw"
                    priority
                  />
                )}
              </div>

              <p className="text-gray-700 leading-relaxed">
                {selectedNews.content}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="bg-[#93d1d3] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#4a9da1] transition-colors"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
