import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
let siteUrl = "http://localhost:3000";
try {
  siteUrl = new URL(rawSiteUrl).origin;
} catch {
  // keep default
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "네오스토리 - 글로벌 콘텐츠 브릿지",
    template: "%s | 네오스토리",
  },
  description: "한국, 일본, 미국을 잇는 글로벌 콘텐츠 브릿지. 웹툰, 단행본 출간, EPUB 글로벌 유통, 페이지 판형화 외주까지 IP의 가능성을 확장합니다.",
  keywords: [
    "네오스토리",
    "Neostory",
    "콘텐츠 브릿지",
    "IP",
    "웹툰",
    "단행본 출간",
    "EPUB",
    "페이지 판형화",
    "글로벌 유통",
    "한국 일본 미국",
  ],
  applicationName: "네오스토리",
  openGraph: {
    title: "네오스토리 - 글로벌 콘텐츠 브릿지",
    description:
      "한국, 일본, 미국을 잇는 글로벌 콘텐츠 브릿지. 웹툰, 단행본 출간, EPUB 글로벌 유통, 페이지 판형화 외주까지 IP의 가능성을 확장합니다.",
    url: "/",
    siteName: "네오스토리",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/neostory-home-hero-compressed.png",
        width: 1200,
        height: 630,
        alt: "네오스토리 홈페이지 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "네오스토리 - 글로벌 콘텐츠 브릿지",
    description:
      "웹툰에서 영상까지, IP의 모든 가능성을 연결합니다. 글로벌 EPUB·출판·판형화 서비스.",
    images: ["/images/neostory-home-hero-compressed.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#111111" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#111111" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "네오스토리",
              url: siteUrl,
              logo: new URL(
                "/images/logo/neostory-logo-mint.png",
                siteUrl
              ).toString(),
              description:
                "한국, 일본, 미국을 잇는 글로벌 콘텐츠 브릿지. 웹툰, 단행본 출간, EPUB 글로벌 유통, 페이지 판형화 외주까지 IP의 가능성을 확장합니다.",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
