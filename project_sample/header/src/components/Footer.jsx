function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* 약관 링크 */}
        <div className="footer-links">
          <a href="#" className="footer-link">이용약관</a>
          <span className="separator">|</span>
          <a href="#" className="footer-link">개인정보처리방침</a>
          <span className="separator">|</span>
          {/* <a href="#" className="footer-link">이메일무단수집거부</a>
          <span className="separator">|</span> */}
          {/* <a href="#" className="footer-link">사용자가이드</a>
          <span className="separator">|</span> */}
          <a href="https://www.kfme.or.kr/kr/index.php" className="footer-link">소상공인연합회</a>
        </div>

        {/* 주소 및 사업자 정보 */}
        <div className="footer-info">
          <p>서울특별시 송파구 중대로9길 34(가락동) 대호빌딩 3층</p>
          <p>대표 : HEADER | 사업자등록번호 : 215-82-12405</p>
          <p>전화 : 02-430-6070 | 팩스 : 02-430-6071 | 개인정보관리책임자 : HEADER</p>
        </div>

        {/* 저작권 */}
        <div className="footer-copy">
          Copyright© 2025. 송파여성인력개발센터 TEAM HEADER. All rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;