export default function DashBoardLayout({ children }) {
    return (
        <>
            <h3>대시보드 메뉴 </h3>
            <ul>
                <li>통계</li>
                <li>사용자</li>
                <li>설정</li>
            </ul>
            {children} {/** 여기에 dashboard/page.js 가 랜더링 됨 */}

        </>
    );
}