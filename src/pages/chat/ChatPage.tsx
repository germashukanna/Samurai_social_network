import s from './Messages.module.css'
import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import {CustomButton} from "../../common/Button/Button";
import {ChatMessageType} from "../../api/Chat-api";
import {useAppDispatch, useAppSelector} from "../../redux/Hooks";
import {sendMessages, startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";

const ChatPage = () => {
    return (
        <div>
            <Chat/>
        </div>
    )
}

const Chat = () => {
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return (
        <div>
            <Messages/>
            <AddMessageChatForm />
        </div>
    )
}

const Messages = () => {

   const messages = useAppSelector(state => state.chat.messages)

    return (
        <div className={s.messagesContainer}>
            {messages.map((m, index) => <Message key={index} message={m}/>)}
        </div>
    )
}

const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {

    return (
        <div>
            <img src={message.photo} className={s.messageImg}/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
}

const AddMessageChatForm = () => {

    const [message, setMessage] = useState('')
    const [isReadyStatus, setIsReadyStatus] = useState<'pending' | 'ready'>('pending')

    const dispatch = useAppDispatch()

    const sendMessage = () => {
        if (!message) {
            return
        }
       dispatch(sendMessages(message))
        setMessage('')
    }

    return (
        <div>
            <div>
                <TextField
                    placeholder="Enter yore message."
                    color="info" variant={'outlined'}
                    sx={{mb: '10px', ml: '10px'}}
                    value={message}
                    onChange={(e) => setMessage(e.currentTarget.value)}
                />

            </div>
            <div className={s.formCustomButton}>
                <CustomButton children={'Send'} onClick={sendMessage}
                              disabled={false}/>
            </div>
        </div>
    )
}


export default ChatPage