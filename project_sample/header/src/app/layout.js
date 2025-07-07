'use client'
import Layout from "../components/Layout";
import { usePathname } from 'next/navigation';
import Header from '../components/Header';
import LandingFooter from '../components/LandingFooter';
import "../style/common/globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  // 랜딩페이지 경로들 (사이드메뉴 없는 페이지들)
  const landingPaths = ['/', '/login', '/signup', '/demo', '/about', '/contact'];
  const isLandingPage = landingPaths.includes(pathname);

  return (
    <html lang="ko">
      <body>
        {isLandingPage ? (
          // 랜딩페이지: 헤더/푸터만 (사이드메뉴 없음)
          <>
            <Header />
            <main style={{ minHeight: '100vh' }}>
              {children}
            </main>
            <LandingFooter />
          </>
        ) : (
          // CRM 페이지: 기존 레이아웃 (헤더/사이드메뉴/푸터)
          <Layout>
            <main className="main-content">
              <div className="content-wrapper">
                {children}
              </div>
            </main>
          </Layout>
        )}
      </body>
    </html>
  );
}