import React from "react";
import s from "./Header.module.scss"

interface Props {

}

export const Header = (props: Props) => {
    return (
        <div className={`${s.main}`}>
            <div className={`${s.header} container`}>
                <div className={s.header_item}>
                    <p>sound studio</p>
                </div>
                <div className={s.header_item}>
                    <a href={"#"}>Главная</a>
                    <a href={"#"}>Тикеты</a>
                </div>
            </div>
        </div>
    );
}