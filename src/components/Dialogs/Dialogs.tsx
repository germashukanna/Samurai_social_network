import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

// type DialogsPropsType ={
//     state: DialogsPageType
//     dispatch: (action: AddPostActionType|SendMessageActionType|UpdateNewPostActionType|updateNewMessageBodyActionType) => void
//
// }


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    //let state = props.dialogsPage;

    const dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                                id={dialog.id}/>);
    const messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message}
                                                                                    key={message.id}/>);
    const newMessagesBody = props.dialogsPage.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    }
    const onSendMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const body = event.currentTarget.value;
        props.onSendMessageChange(body)
        // props.dispatch(updateNewMessageBodyCreator(body))
    }
    // if (!props.isAuth) return <Redirect to={"./login"}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
           <textarea value={newMessagesBody}
                     placeholder={'Enter message'}
                     onChange={onSendMessageChange}
           >

           </textarea>
                    </div>

                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;