import Link from 'next/link';
import React from 'react';

// 헤더 컴포넌트
function Header({ isSideMenuOpen, toggleSideMenu }) {
  return (
    <header className="header">
      {/* 모바일 햄버거 메뉴 버튼 */}
      <button
        onClick={toggleSideMenu}
        className="hamburger-menu"
        aria-label="메뉴 토글" // 접근성 개선
      >
        <span className={`hamburger-line ${isSideMenuOpen ? 'line-1-active' : ''}`}></span>
        <span className={`hamburger-line ${isSideMenuOpen ? 'line-2-active' : ''}`}></span>
        <span className={`hamburger-line ${isSideMenuOpen ? 'line-3-active' : ''}`}></span>
      </button>

      {/* 로고 영역 */}
      <Link href="/">
        <div className="logo-container">
          <img src='/images/headerLogo.png' alt='로고' className="logo" />
        </div>
      </Link>

      {/* 헤더 버튼 */}
      <div className="nav-actions">
        <button className="logout-btn">
          로그인
        </button>
        <button className="logout-btn">
          회원가입
        </button>
      </div>
    </header>
  );
}

export default Header;