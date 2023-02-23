import s from './Messages.module.css'
import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import {CustomButton} from "../../common/Button/Button";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

const ChatPage = () => {
    return (
        <div>
            <Chat/>
        </div>
    )
}

const Chat = () => {


    return (
        <div>
            <Messages/>
            <AddMessageChatForm/>
        </div>
    )
}

const Messages = () => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            let newMesseges = JSON.parse(e.data)
            setMessages((preyMessages) => [...preyMessages, ...newMesseges])
        })
    }, [])

    return (
        <div className={s.messagesContainer}>
            {messages.map((m, index) => <Message key={index} message={m}/>)}
        </div>
    )
}

const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {

    return (
        <div>
            <img src={message.photo} className={s.messageImg}/> <b>{message.userName}: </b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
}

const AddMessageChatForm = () => {

    const [message, setMessage] = useState('')

    const sendMessage = () => {
        if (!message) {
            return
        }
        ws.send(message)
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
                <CustomButton children={'Send'} onClick={sendMessage}/>
            </div>
        </div>
    )
}


export default ChatPage