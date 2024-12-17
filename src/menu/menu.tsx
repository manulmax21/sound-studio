import React, {useState} from "react";
import s from "./menu.module.scss"
import {FormMenu} from "./FormMenu";
import {ItemMenu} from "./itemMenu";

interface Props {

}

export const Menu = (props: Props) => {
    const [Tickets, setTickets] = useState([
        {id: 1, name: "Юзер 1", phone: "+7 777 77 77", dataStart: "12", dataOrder: "12"},
        {id: 2, name: "Юзер 2", phone: "+7 777 77 77", dataStart: "12", dataOrder: "12"}
    ])
    const addTicket = (data) => {
        setTickets([...Tickets, data])
    }
    const remTicket = (id) => {
        setTickets(Tickets.filter(p => p.id !== id))
    }

    return (
        <div className={"container"}>
            <FormMenu
                addItem={addTicket}
            />
            <div className={"row-12"}>
                {Tickets.map(e => (
                    <div className={"col-12"}>
                        <ItemMenu
                            key={e.id}
                            item={e}
                            addTicket={addTicket}
                            remTicket={remTicket}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}