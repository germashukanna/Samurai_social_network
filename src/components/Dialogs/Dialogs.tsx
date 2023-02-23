import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageForm, ValuesType} from "../../form/Form";


const Dialogs: React.FC<DialogsPropsType> = React.memo((props) => {

    const dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                                    id={dialog.id}/>);
    const messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message}
                                                                                    key={message.id}/>);
    const newSendMessage = (values: ValuesType) => {
        props.sendMessage(values.message as string)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messagesDialogs}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm callback={newSendMessage}/>
                </div>
            </div>
        </div>
    );
});

export default Dialogs;

