import Link from "next/link";

export default function LandingFooter() {
    return (
        <footer className="landing-footer">
            <div className="footer-content">
                <div className="footer-info">
                    <Link href="/">
                        <img src='/images/headerLogoWhite.png' alt='로고' className="footerLogo" />
                    </Link>
                    <p>뷰티샵을 위한 스마트 관리 시스템</p>
                </div>
                <div className="footer-links">
                    <Link href="/about">회사소개</Link>
                    <Link href="/contact">문의하기</Link>
                    <Link href="/privacy">개인정보처리방침</Link>
                    <Link href="/terms">이용약관</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 HEADER. All rights reserved.</p>
            </div>

            <style jsx>{`
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
          margin: 0;
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

        .footer-bottom p {
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 20px;
          }

          .footer-links {
            justify-content: center;
            gap: 16px;
          }
        }
      `}</style>
        </footer>
    );
}