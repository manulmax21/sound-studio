import React, {useState} from "react";
import s from "./menu.module.scss"

interface Props {
    addItem: (data) => any
}

export const FormMenu = (props: Props) => {
    const [data, setData] = useState({
        name: "", phone: "", id: Date.now(),
        dataStart: new Date().toISOString().split("T")[0],
        dataOrder: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split("T")[0]
    })
    const addItem = () => {
        setData({...data, id: Date.now(),
            dataStart: new Date().toISOString().split("T")[0],
            dataOrder: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split("T")[0]
        })
        if (data.name && data.phone) props.addItem(data)
    }

    return (
        <div className={`${s.FormMenu} container`}>
            <div className={s.container}>
                <span>Имя:</span>
                <input
                    placeholder={"Имя..."}
                    value={data.name}
                    onChange={(v) => setData({...data, name: v.target.value})}
                />
                <span>Номер телефона:</span>
                <input
                    placeholder={"+7 777 77 77"}
                    value={data.phone}
                    onChange={(v) => setData({...data, phone: v.target.value})}
                />
            </div>
            <div className={s.container}>
                <button onClick={addItem}>Добавить заказ</button>
            </div>
        </div>
    );
}