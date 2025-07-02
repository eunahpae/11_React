'use client';
import { getMenuList } from "@/apis/MenuAPI";
import { useEffect, useState } from "react";
import boxStyle from "./Menu.module.css";
import MenuItem from "@/item/MenuItem";
import { useRouter } from "next/navigation";

export default function Menu() {

    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState();

    const router = useRouter();

    useEffect(() => {
        setMenuList(getMenuList);
    }, []
    );

    // console.log(menuList);

    const onChangeHandler = (e) => {
        setSearchValue(e.target.value);
    }

    const onClickHandler = () => {
        router.push(`/menu/search?menuName=${searchValue}`);
    }

    return (
        <>
            <h2>🍲 메뉴 목록 </h2>
            <div>
                <input type="search" name="menuName" value={searchValue} onChange={onChangeHandler} />
                <button onClick={onClickHandler}>검색</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu =>
                    <MenuItem key={menu.menuCode} menu={menu} />)}
            </div>
        </>
    );
}