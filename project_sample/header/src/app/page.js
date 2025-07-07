"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="landing-container">
      {/* 랜딩 전용 헤더 */}

      {/* 메인 섹션 */}
      <main className="landing-main">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              뷰티샵과 고객을 잇는<br />
              <span className="hero-accent">스마트 플랫폼</span>
            </h1>
            <p className="hero-description">
              고객은 쉽게 예약하고, 사장님은 편리하게 관리하세요.<br />
              모두가 만족하는 뷰티샵 예약 서비스입니다.
            </p>
            <div className="hero-buttons">
              <Link href="/signup" className="cta-button primary">
                지금 시작하기
              </Link>
              <Link href="/shops" className="cta-button secondary">
                샵 찾아보기
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-illustration">
              <div className="feature-preview">
                <div className="preview-card">
                  <div className="preview-header">💇🏻‍♀️ 샵 예약</div>
                  <div className="preview-number">지도에서 쉽게 찾기</div>
                </div>
                <div className="preview-card">
                  <div className="preview-header">💰 오늘 매출</div>
                  <div className="preview-number">245,000원</div>
                </div>
                <div className="preview-card">
                  <div className="preview-header">✂️ 완료된 시술</div>
                  <div className="preview-number">6건</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 특징 섹션 */}
        <section className="features-section">
          <div className="features-container">
            <h2 className="features-title">고객과 원장님 모두가 만족하는 이유</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <h3 className="feature-title">24시간 언제든 예약</h3>
                <p className="feature-description">
                  고객: 전화할 필요 없이 원하는 시간에 바로 예약<br />
                  사장님: 예약 관리가 자동으로 깔끔하게
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⏰</div>
                <h3 className="feature-title">실시간 예약 확인</h3>
                <p className="feature-description">
                  고객: 예약 상태를 실시간으로 확인 가능<br />
                  사장님: 오늘 스케줄을 한눈에 파악
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💰</div>
                <h3 className="feature-title">투명한 가격 안내</h3>
                <p className="feature-description">
                  고객: 시술별 가격을 미리 확인하고 선택<br />
                  사장님: 매출 관리와 정산이 자동으로
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="cta-section">
          <div className="cta-container">
            <h2 className="cta-title">지금 바로 시작해보세요</h2>
            <p className="cta-description">
              고객도 사장님도 모두 만족하는 새로운 뷰티샵 경험을 시작하세요
            </p>
            <div className="cta-buttons">
              <Link href="/myshop/main" className="cta-button large primary-cta">
                샵 등록하기 (사장님)
              </Link>
              {/* <Link href="/login" className="cta-button large secondary-cta">
                예약하러 가기 (고객)
              </Link> */}
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}

      <style jsx>{`
        .landing-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #13183D 10%, #764ba2 100%);
          color: #333;
        }

        /* 랜딩 헤더 */
        .landing-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 100;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .landing-header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .landing-logo h1 {
          font-size: 24px;
          font-weight: 700;
          color: #13183D;
          margin: 0;
        }

        .landing-nav {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nav-link {
          color: #666;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .nav-link:hover {
          background: #f3f4f6;
          color: #13183D;
        }

        .nav-button {
          background: #13183D;
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .nav-button:hover {
          background: #0f172a;
          transform: translateY(-1px);
        }

        /* 메인 섹션 */
        .landing-main {
          padding-top: 80px;
        }

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          gap: 60px;
        }

        .hero-content {
          flex: 1;
          max-width: 500px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          color: white;
        }

        .hero-accent {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 32px;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s ease;
          display: inline-block;
        }

        .cta-button.primary {
          background: white;
          color: #13183D;
        }

        .cta-button.primary:hover {
          background: #f8fafc;
          transform: translateY(-2px);
        }

        .cta-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .cta-button.large {
          padding: 16px 32px;
          font-size: 18px;
          border-radius: 12px;
        }

        .cta-button.primary-cta {
          background: #13183D;
          color: white;
        }

        .cta-button.primary-cta:hover {
          background: #0f172a;
          transform: translateY(-2px);
        }

        .cta-button.secondary-cta {
          background: white;
          color: #13183D;
          border: 2px solid #13183D;
        }

        .cta-button.secondary-cta:hover {
          background: #f8fafc;
          transform: translateY(-2px);
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* 히어로 이미지 */
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .feature-preview {
          display: grid;
          gap: 16px;
          transform: rotate(5deg);
        }

        .preview-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          min-width: 200px;
        }

        .preview-header {
          font-size: 14px;
          color: #666;
          margin-bottom: 8px;
        }

        .preview-number {
          font-size: 24px;
          font-weight: 700;
          color: #13183D;
        }

        /* 특징 섹션 */
        .features-section {
          background: white;
          padding: 80px 24px;
        }

        .features-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .features-title {
          text-align: center;
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 60px;
          color: #13183D;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .feature-item {
          text-align: center;
        }

        .feature-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .feature-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #13183D;
        }

        .feature-description {
          color: #666;
          line-height: 1.6;
        }

        /* CTA 섹션 */
        .cta-section {
          background: #f8fafc;
          padding: 80px 24px;
          text-align: center;
        }

        .cta-container {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #13183D;
        }

        .cta-description {
          font-size: 18px;
          color: #666;
          margin-bottom: 32px;
        }

        /* 푸터 */
        .landing-footer {
          background: #13183D;
          color: white;
          padding: 40px 24px 20px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 20px;
        }

        .footer-info h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }

        .footer-info p {
          color: rgba(255, 255, 255, 0.7);
        }

        .footer-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: white;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: rgba(255, 255, 255, 0.5);
        }

        /* 반응형 */
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            gap: 40px;
            padding: 40px 16px;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-buttons {
            justify-content: center;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-links {
            justify-content: center;
          }

          .landing-nav {
            gap: 8px;
          }

          .nav-link, .nav-button {
            padding: 8px 12px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}