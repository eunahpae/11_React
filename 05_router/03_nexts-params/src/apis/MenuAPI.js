import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import menus from "../data/menu-detail.json"

// 메뉴 데이터 전체 조회
export function getMenuList() {
    return menus;
}

export function getMenuByMenuCode(menuCode) {
    /** 
     * pathVariable menuCode 를 전달 받고 있다. 
     * 단, 주의점은 URL 데이터는 문자열이다.
     */
    console.log(typeof menuCode);

    /** filter : 배열에서 콜백함수가 true인 요소만 배열로 반환해준다. */
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0];

}

// 메뉴명 전달받아 메뉴 이름을 포함하고 있는 메뉴 목록 조회
export function getSearchMenu(searchMenuName) {

    // match() : 포함 여부에 따라 인수 값이 포함되어 있으면 객체 반환
    return menus.filter(menu => menu.menuName.match(searchMenuName))
}