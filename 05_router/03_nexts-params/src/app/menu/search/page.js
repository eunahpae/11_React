'use client';
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import { getSearchMenu } from "@/apis/MenuAPI";
import MenuItem from "@/item/MenuItem";
import boxStyle from "../Menu.module.css";

export default function MenuSearchResult() {

    const searchParams = useSearchParams();
    const menuName = searchParams.get('menuName');

    // console.log(menuName);

    const [menuList, setMenuList] = useState([]);
    useEffect(() => {
        setMenuList(getSearchMenu(menuName));
    }, []
    );


    return (
        <>
            <h2>검색 결과 </h2>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu =>
                    <MenuItem key={menu.menuCode} menu={menu} />)}
            </div>

        </>
    )
}