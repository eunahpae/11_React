"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AdminMain() {
    // 대시보드 데이터 상태
    const [dashboardData, setDashboardData] = useState({
        todayReservations: 0,      // 오늘 날짜로 예약된 건수
        todaySales: 0,            // 오늘 실제 매출
        completedServices: 0,     // 오늘 완료된 시술 건수  
        monthlyReservations: 0,
        monthlySales: 0,
        isLoading: true
    });

    // 데이터 로드
    useEffect(() => {
        const loadDashboardData = async () => {
            try {
                // 실제 구현 시 API 호출
                // const response = await fetch('/api/dashboard');
                // const data = await response.json();

                // 임시 데이터 (실제 구현 시 제거)
                const mockData = {
                    todayReservations: 8,      // 오늘 날짜로 예약된 건수 (실제 시술 예정)
                    todaySales: 245000,        // 오늘 실제 발생한 매출
                    completedServices: 6,      // 오늘 완료된 시술 건수
                    monthlyReservations: 156,
                    monthlySales: 5240000
                };

                setTimeout(() => {
                    setDashboardData({
                        ...mockData,
                        isLoading: false
                    });
                }, 1000); // 로딩 효과

            } catch (error) {
                console.error('대시보드 데이터 로드 실패:', error);
                setDashboardData(prev => ({ ...prev, isLoading: false }));
            }
        };

        loadDashboardData();
    }, []);

    // 숫자 포맷팅
    const formatNumber = (num) => {
        return num.toLocaleString('ko-KR');
    };

    // 현재 시간
    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        });
    };

    if (dashboardData.isLoading) {
        return (
            <div className="content-card">
                <div className="loading-container" style={{ textAlign: 'center', padding: '50px' }}>
                    <div>대시보드를 불러오는 중...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="content-card">
            {/* 헤더 */}
            <div className="dashboard-header">
                <h1 className="main-title">관리자 대시보드</h1>
                <p className="main-subtitle">{getCurrentTime()}</p>
            </div>

            {/* 오늘의 현황 */}
            <div className="stats-section">
                <h2 className="section-title">오늘의 현황</h2>
                <div className="stats-grid">
                    <div className="stat-card stat-card-blue">
                        <div className="stat-icon">📅</div>
                        <div className="stat-content">
                            <h3 className="stat-title">오늘 예약</h3>
                            <p className="stat-number">{formatNumber(dashboardData.todayReservations)}건</p>
                            <p className="stat-description">오늘 날짜로 예약된 건수</p>
                            <Link href="/myshop/reservation-list" className="stat-link">
                                예약 목록 보기 →
                            </Link>
                        </div>
                    </div>

                    <div className="stat-card stat-card-green">
                        <div className="stat-icon">💰</div>
                        <div className="stat-content">
                            <h3 className="stat-title">오늘 매출</h3>
                            <p className="stat-number">{formatNumber(dashboardData.todaySales)}원</p>
                            <p className="stat-description">오늘 실제 발생한 매출</p>
                            <Link href="/myshop/sales" className="stat-link">
                                매출 상세 보기 →
                            </Link>
                        </div>
                    </div>

                    <div className="stat-card stat-card-purple">
                        <div className="stat-icon">✂️</div>
                        <div className="stat-content">
                            <h3 className="stat-title">완료된 시술</h3>
                            <p className="stat-number">{formatNumber(dashboardData.completedServices)}건</p>
                            <p className="stat-description">오늘 완료된 시술 건수</p>
                            <Link href="/myshop/customer-list" className="stat-link">
                                시술 내역 보기 →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 이번 달 현황 */}
            <div className="stats-section">
                <h2 className="section-title">이번 달 현황</h2>
                <div className="stats-grid-monthly">
                    <div className="stat-card stat-card-orange">
                        <div className="stat-icon">📊</div>
                        <div className="stat-content">
                            <h3 className="stat-title">월 총 예약</h3>
                            <p className="stat-number">{formatNumber(dashboardData.monthlyReservations)}건</p>
                            <Link href="/myshop/sales/analytics" className="stat-link">
                                분석 보기 →
                            </Link>
                        </div>
                    </div>

                    <div className="stat-card stat-card-teal">
                        <div className="stat-icon">💎</div>
                        <div className="stat-content">
                            <h3 className="stat-title">월 총 매출</h3>
                            <p className="stat-number">{formatNumber(dashboardData.monthlySales)}원</p>
                            <Link href="/myshop/sales/analytics" className="stat-link">
                                월별 분석 →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 빠른 액션 */}
            <div className="stats-section">
                <h2 className="section-title">빠른 작업</h2>
                <div className="quick-actions">
                    <Link href="/myshop/reservation" className="action-card action-card-primary">
                        <div className="action-icon">➕</div>
                        <div className="action-content">
                            <h3 className="action-title">새 예약 등록</h3>
                            <p className="action-description">고객 예약을 빠르게 등록하세요</p>
                        </div>
                    </Link>

                    <Link href="/myshop/customer" className="action-card action-card-secondary">
                        <div className="action-icon">👤</div>
                        <div className="action-content">
                            <h3 className="action-title">고객 등록</h3>
                            <p className="action-description">새로운 고객을 등록하세요</p>
                        </div>
                    </Link>

                    <Link href="/myshop/sales" className="action-card action-card-accent">
                        <div className="action-icon">💳</div>
                        <div className="action-content">
                            <h3 className="action-title">매출 등록</h3>
                            <p className="action-description">오늘의 매출을 기록하세요</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}