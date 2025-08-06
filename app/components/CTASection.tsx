"use client";

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  content: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export default function CTASection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    content: ''
  });
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: 'idle' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setFormStatus({ type: 'error', message: '이름을 입력해주세요.' });
      return false;
    }
    if (!formData.email.trim()) {
      setFormStatus({ type: 'error', message: '이메일을 입력해주세요.' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormStatus({ type: 'error', message: '올바른 이메일 형식을 입력해주세요.' });
      return false;
    }
    if (!formData.content.trim()) {
      setFormStatus({ type: 'error', message: '문의 내용을 입력해주세요.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus({ type: 'loading' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: '제작 제안',
          message: formData.content,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: '문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.'
        });
        setFormData({ name: '', email: '', content: '' });
      } else {
        setFormStatus({
          type: 'error',
          message: result.error || '전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
        });
      }
    } catch (error) {
      console.error('Email sending error:', error);
      setFormStatus({
        type: 'error',
        message: '전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      });
    }
  };

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
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-white hover:bg-gray-100 text-[#4a9da1] font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 min-w-[200px]"
          >
            {showForm ? '폼 닫기' : '제작 제안하기'}
          </button>

          {/* <button className="border-2 border-white hover:bg-white hover:text-[#4a9da1] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 min-w-[200px]">
            회사 소개서 다운로드
          </button> */}
        </div>

        {/* 제작 제안 폼 */}
        {showForm && (
          <div className="mb-16 transition-all duration-500 ease-in-out">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-[#4a9da1] mb-2">
                제작 제안하기
              </h3>
              <p className="text-gray-700 mb-8">
                프로젝트에 대한 상세한 정보를 남겨주시면 빠르게 연락드리겠습니다.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a9da1] focus:border-transparent transition-all duration-300 font-light text-gray-900 placeholder-gray-500"
                      placeholder="홍길동"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a9da1] focus:border-transparent transition-all duration-300 font-light text-gray-900 placeholder-gray-500"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-800 mb-2">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a9da1] focus:border-transparent transition-all duration-300 font-light text-gray-900 placeholder-gray-500 resize-none"
                    placeholder="문의 내용을 입력해주세요."
                    required
                  />
                </div>

                {/* 상태 메시지 */}
                {formStatus.message && (
                  <div className={`p-4 rounded-lg ${formStatus.type === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : formStatus.type === 'error'
                      ? 'bg-red-50 text-red-700 border border-red-200'
                      : ''
                    }`}>
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus.type === 'loading'}
                  className="w-full bg-gradient-to-r from-[#93d1d3] to-[#4a9da1] hover:from-[#4a9da1] hover:to-[#93d1d3] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {formStatus.type === 'loading' ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      전송 중...
                    </div>
                  ) : (
                    '제안서 전송하기'
                  )}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* 연락처 정보 */}
        <div className="pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80">
            <div>
              <h3 className="font-semibold mb-2">이메일</h3>
              <p>contact@neostory.kr</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">주소</h3>
              <p>서울특별시 강남구 논현로128길 20, JS빌딩 6층</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}