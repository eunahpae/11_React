import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// 사이드 메뉴바 컴포넌트
function SideMenuBar({ 
  isOpen, 
  closeSideMenu, 
  currentPath = "/", 
  userRole, // Layout에서 전달받은 권한 값 (1 또는 2)
  viewMode = "admin",
  onViewModeChange
}) {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState({});
  const [pendingNavigation, setPendingNavigation] = useState(null);

  // 권한별 뷰모드 제어
  const canSwitchViewMode = userRole === 2; // 샵 관리자만 뷰모드 전환 가능
  const effectiveViewMode = canSwitchViewMode ? viewMode : "customer";
  
  const isAdmin = effectiveViewMode === "admin" && userRole === 2;
  const isCustomer = effectiveViewMode === "customer";

  // 관리자용 메뉴 (권한 2만 접근 가능)
  const adminMenus = [
    {
      key: "reservation",
      title: "예약 관리",
      firstPath: "/myshop/reservation",
      items: [
        { path: "/myshop/reservation", text: "예약 등록" },
        { path: "/myshop/reservation-list", text: "예약 조회" }
      ]
    },
    {
      key: "sales",
      title: "매출 관리",
      firstPath: "/myshop/sales",
      items: [
        { path: "/myshop/sales", text: "매출조회/등록" },
        { path: "/myshop/sales/analytics", text: "기간별 매출" },
        { path: "/myshop/sales/customers", text: "고객별 매출" },
        { path: "/myshop/sales/menu", text: "시술별 매출" }
      ]
    },
    {
      key: "customer",
      title: "고객 관리",
      firstPath: "/myshop/customer",
      items: [
        { path: "/myshop/customer", text: "고객 등록" },
        { path: "/myshop/customer-list", text: "고객 조회" }
      ]
    },
    {
      key: "menu",
      title: "시술 관리",
      firstPath: "/myshop/menu",
      items: [
        { path: "/myshop/menu", text: "시술 등록" },
        { path: "/myshop/menu-list", text: "시술 조회" }
      ]
    },
    {
      key: "message",
      title: "메시지 관리",
      firstPath: "/myshop/message",
      items: [
        { path: "/myshop/message", text: "메시지 등록" },
        { path: "/myshop/message-list", text: "메시지 조회" }
      ]
    }
  ];

  // 고객용 메뉴 (모든 권한 접근 가능)
  const customerMenus = [
    { path: "/shops", text: "샵예약" },
    { path: "/shops/reservation", text: "예약내역" }
  ];

  // 네비게이션 처리
  useEffect(() => {
    if (pendingNavigation) {
      router.push(pendingNavigation);
      setPendingNavigation(null);
    }
  }, [pendingNavigation, router]);

  // 섹션 토글
  const toggleSection = (sectionKey, firstPath) => {
    setExpandedSections(prev => {
      const wasExpanded = prev[sectionKey];
      const newState = { [sectionKey]: !wasExpanded };
      
      if (!wasExpanded && firstPath) {
        setPendingNavigation(firstPath);
      }
      
      return newState;
    });
  };

  // 뷰 모드 토글 (권한 2만 가능)
  const handleViewModeToggle = () => {
    if (!canSwitchViewMode) {
      console.warn("권한이 없습니다. 샵 관리자만 뷰모드를 전환할 수 있습니다.");
      return;
    }

    const newViewMode = isAdmin ? "customer" : "admin";
    onViewModeChange?.(newViewMode);
    router.push(newViewMode === "customer" ? "/shops" : "/myshop/main");
  };

  // 샵 등록 및 관리 페이지로 이동 (권한 1 전용)
  const handleShopManagement = () => {
    router.push("/shop-management");
  };

  // 프로필 경로
  const getProfilePath = () => {
    if (userRole === 2) { // 샵 관리자
      return isAdmin ? "/myshop/main" : "/shops";
    } else {
      return "/shops"; // 일반 고객은 항상 고객 페이지
    }
  };

  // 권한 표시 텍스트
  const getUserRoleText = () => {
    return userRole === 1 ? "일반고객" : "샵관리자";
  };

  const isActive = (path) => currentPath === path;

  // userRole이 없으면 렌더링하지 않음
  if (userRole === null || userRole === undefined) {
    return null;
  }

  return (
    <>
      {isOpen && <div className="overlay" onClick={closeSideMenu} />}

      <aside className={`side-menu ${isOpen ? 'side-menu-open' : ''}`}>
        <div className="side-menu-content">
          {/* 사용자 프로필 */}
          <Link href={getProfilePath()}>
            <div className="user-profile">
              <div className="profile-container">
                <div className="profile-circle-fallback">
                  <span>펌</span>
                </div>
              </div>
              <div className="profile-info">
                <p className="shop-name">펌앤코드</p>
                <p className="user-id">@boa</p>
                
                {/* 샵 관리자인 경우에만 뷰모드 표시 */}
                {userRole === 2 && (
                  <p className="view-mode-indicator">
                    {isAdmin ? "ADMIN" : "CUSTOMER"}
                  </p>
                )}
                
                {/* 개발 모드에서만 권한 표시 */}
                {process.env.NODE_ENV === 'development' && (
                  <p className="role-indicator" style={{fontSize: '11px', color: '#888', marginTop: '4px'}}>
                    {getUserRoleText()} (권한: {userRole})
                  </p>
                )}
              </div>
            </div>
          </Link>

          {/* 관리자 모드 메뉴 - 권한 2이면서 관리자 모드일 때만 표시 */}
          {isAdmin && userRole === 2 && (
            <nav className="navigation">
              {adminMenus.map(section => (
                <div key={section.key} className="nav-section">
                  <h3
                    className="nav-title clickable-title"
                    onClick={() => toggleSection(section.key, section.firstPath)}
                  >
                    {section.title}
                    <span className={`arrow ${expandedSections[section.key] ? 'arrow-down' : 'arrow-right'}`}>
                      {expandedSections[section.key] ? '〈' : '〉'}
                    </span>
                  </h3>
                  <div className={`nav-list ${expandedSections[section.key] ? 'nav-list-expanded' : 'nav-list-collapsed'}`}>
                    {section.items.map(item => (
                      <Link key={item.path} href={item.path}>
                        <div className={`nav-item ${isActive(item.path) ? 'nav-item-active' : ''}`}>
                          <span className="nav-text">{item.text}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          )}

          {/* 고객 모드 메뉴 - 고객 모드이거나 권한 1일 때 표시 */}
          {(isCustomer || userRole === 1) && (
            <nav className="navigation">
              {customerMenus.map(menu => (
                <Link key={menu.path} href={menu.path}>
                  <div className={`nav-item ${isActive(menu.path) ? 'nav-item-active' : ''}`}>
                    <span className="nav-text nav-text-title-size">{menu.text}</span>
                  </div>
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* 하단 고정 메뉴 */}
        <div className="bottom-menu">
          {/* 설정 메뉴 */}
          <Link href={isAdmin ? "/myshop/settings" : "/user/settings"}>
            <div className={`bottom-menu-item ${isActive(isAdmin ? "/myshop/settings" : "/user/settings") ? 'bottom-menu-item-active' : ''}`}>
              <span className="bottom-menu-icon">⚙️</span>
              <span className="bottom-menu-text">설정</span>
            </div>
          </Link>
          
          {/* 권한별 하단 메뉴 */}
          {userRole === 1 ? (
            // 권한 1: 샵 등록 및 관리
            <div className="bottom-menu-item clickable" onClick={handleShopManagement}>
              <span className="bottom-menu-icon">🏪</span>
              <span className="bottom-menu-text">샵 등록 및 관리</span>
            </div>
          ) : userRole === 2 ? (
            // 권한 2: 뷰 모드 전환
            <div className="bottom-menu-item clickable" onClick={handleViewModeToggle}>
              <span className="bottom-menu-icon">{isAdmin ? "👤" : "🔧"}</span>
              <span className="bottom-menu-text">
                {isAdmin ? "고객 페이지 전환" : "관리자 페이지 전환"}
              </span>
            </div>
          ) : null}
        </div>
      </aside>
    </>
  );
}

export default SideMenuBar;