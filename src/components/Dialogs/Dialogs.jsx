import React from "react";
import s from "./Dialogs.module.scss";
import { NavLink, Redirect } from "react-router-dom";

const DialogItem = props => {
    return (
        <div className={s.item}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

const Message = props => {
    return <div className={s.message}>{props.message}</div>;
};

const Dialogs = props => {
    const state = props.dialogsPage

    const dialogsElements = state.dialogs.map(dialog => (
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
    ));
    const messagesElements = state.messages.map(msg => (
        <Message message={msg.message} key={msg.id} />
    ));
    const newMessageText = state.newMessageText;

    const onSendMessageClick = () => {
        props.sendMessage()
    };

    const onNewMessageChange = e => {
        const text = e.target.value;
        props.updateNewMessageText(text)
    };

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s["dialogs-items"]}>{dialogsElements}</div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div className="">
                        <textarea
                            value={newMessageText}
                            onChange={e => onNewMessageChange(e)}
                        ></textarea>
                    </div>
                    <div className="">
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
