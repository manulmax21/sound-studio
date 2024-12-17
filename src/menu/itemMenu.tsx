import React from "react";
import s from "./menu.module.scss"

interface Props {
    item: {
        id: any, name: String, phone: String, dataStart: String, dataOrder: String
    },
    remTicket: (data) => any
}

export const ItemMenu = (props: Props) => {
    const remItem = () => {
      props.remTicket(props.item.id)
    }

    return (
        <div className={s.ItemMenu}>
            <div>
                <p>{props.item.name}</p>
                <p>{props.item.phone}</p>
            </div>
            <div className={s.dateCo}>
                <div className={s.date}>
                    <p>Заказана аренда {props.item.dataStart}</p>
                    <p>На {props.item.dataOrder}</p>
                </div>
                <div className={s.rem}>
                    <button onClick={remItem}>
                        <i className="fi fi-rr-trash"/>
                    </button>
                </div>
            </div>
        </div>
    );
}