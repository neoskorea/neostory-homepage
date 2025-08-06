# Neostory Homepage

네오스토리의 공식 홈페이지입니다. 글로벌 콘텐츠 제작 및 배포 서비스를 소개하는 현대적이고 인터랙티브한 웹사이트입니다.

## 🚀 프로젝트 개요

Neostory는 일본 네트워크를 기반으로 한 글로벌 콘텐츠 제작 및 배포 전문 기업입니다. 이 홈페이지는 다음과 같은 서비스들을 소개합니다:

- **EPUB 전자책 서비스**: 다국어(일본어, 영어) 전자책 제작 및 배포
- **단행본 출간**: 글로벌 시장을 위한 고품질 단행본 출간
- **페이지 변환 서비스**: 다양한 플랫폼을 위한 콘텐츠 변환
- **IP 쇼케이스**: 네오스토리의 주요 IP 및 작품 소개

## ✨ 주요 기능

### 🎨 인터랙티브 히어로 섹션
- Canvas 기반 파티클 애니메이션
- 반응형 디자인
- 부드러운 스크롤 효과

### 📱 반응형 디자인
- 모바일, 태블릿, 데스크톱 최적화
- Tailwind CSS를 활용한 현대적인 UI/UX

### 🌐 글로벌 콘텐츠 소개
- 일본어, 영어 콘텐츠 쇼케이스
- 글로벌 배포 네트워크 소개

### 📧 연락처 기능
- 이메일 전송 API (Nodemailer)
- 사용자 문의 처리

## 🛠 기술 스택

### Frontend
- **Next.js 15.4.5** - React 기반 풀스택 프레임워크
- **React 19.1.0** - 사용자 인터페이스 라이브러리
- **TypeScript 5** - 타입 안전성
- **Tailwind CSS 4** - 유틸리티 우선 CSS 프레임워크

### Backend
- **Next.js API Routes** - 서버리스 API
- **Nodemailer** - 이메일 전송 서비스

### 개발 도구
- **ESLint** - 코드 품질 관리
- **Turbopack** - 빠른 개발 서버

## 📁 프로젝트 구조

```
neostory-homepage/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts          # 이메일 전송 API
│   ├── components/
│   │   ├── HeroSection.tsx       # 메인 히어로 섹션
│   │   ├── WhyNeostorySection.tsx # 네오스토리 소개
│   │   ├── HistorySection.tsx    # 회사 역사
│   │   ├── IPShowcaseSection.tsx # IP 쇼케이스
│   │   ├── EpubServiceSection.tsx # EPUB 서비스
│   │   ├── BookPublishingSection.tsx # 단행본 출간
│   │   ├── PageConversionSection.tsx # 페이지 변환
│   │   └── CTASection.tsx        # 행동 유도 섹션
│   ├── layout.tsx                # 루트 레이아웃
│   └── page.tsx                  # 메인 페이지
├── public/
│   └── images/                   # 이미지 에셋
│       ├── logo/                 # 로고 이미지
│       └── works/                # 작품 이미지
└── package.json
```

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0.0 이상
- pnpm (권장) 또는 npm

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone [repository-url]
   cd neostory-homepage
   ```

2. **의존성 설치**
   ```bash
   pnpm install
   # 또는
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   pnpm dev
   # 또는
   npm run dev
   ```

4. **브라우저에서 확인**
   ```
   http://localhost:3000
   ```

### 빌드 및 배포

```bash
# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start

# 린트 검사
pnpm lint
```

## 🎯 주요 섹션

### 1. 히어로 섹션
- 인터랙티브 파티클 애니메이션
- 네오스토리 브랜딩
- 메인 메시지 전달

### 2. 네오스토리 소개
- 유일무이한 일본 네트워크
- 업계를 압도하는 인프라
- 콘텐츠의 극대화

### 3. EPUB 서비스
- 일본어 EPUB 서비스
- 영어 EPUB 서비스
- 글로벌 배포 네트워크

### 4. 단행본 출간
- 40,000부 일본 초판 발행
- 3개국 다국가 동시 출간
- 프리미엄 편집 품질

## 🔧 환경 설정

### 이메일 서비스 설정
이메일 전송 기능을 사용하려면 환경 변수를 설정해야 합니다:

```env
# .env.local
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 📱 반응형 디자인

- **모바일**: 320px - 768px
- **태블릿**: 768px - 1024px
- **데스크톱**: 1024px 이상

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: `#93d1d3` (민트 그린)
- **Secondary**: `#4db6ac` (파티클 색상)
- **Text**: `#1f2937` (다크 그레이)
- **Background**: `#ffffff`, `#f9fafb`

### 타이포그래피
- **Heading**: Light weight, 대형 사이즈
- **Body**: Light weight, 가독성 최적화
- **Caption**: 작은 사이즈, 트래킹 적용

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 Neostory의 내부 프로젝트입니다.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.

---

**Neostory** - 글로벌 콘텐츠의 새로운 이야기를 만들어갑니다.
