import s from './Messages.module.css'
import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import {CustomButton} from "../../common/Button/Button";

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
    const [ws, setWs] = useState<WebSocket | null>(null)

    useEffect(() => {
        let socket: WebSocket;
        const closeHandler = () => {
            setTimeout(createChannel, 3000);
        }

        function createChannel() {

            socket?.removeEventListener('close', closeHandler)
            socket?.close()

            socket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
            socket.addEventListener('close', closeHandler)
            setWs(socket)
        }

        createChannel()

        return () => {
            socket.removeEventListener('close', closeHandler)
            socket.close()
        }
    }, [])

    useEffect(() => {


    }, [ws])

    return (
        <div>
            <Messages ws={ws}/>
            <AddMessageChatForm ws={ws}/>
        </div>
    )
}

const Messages: React.FC<{ ws: WebSocket | null }> = ({ws}) => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])
    let onMessageHandler = (e: MessageEvent) => {
        let newMesseges = JSON.parse(e.data)
        setMessages((preyMessages) => [...preyMessages, ...newMesseges])
    }
    useEffect(() => {
        ws?.addEventListener('message', onMessageHandler)

        return () => {
            ws?.removeEventListener('message', onMessageHandler)
        }
    }, [ws])

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

const AddMessageChatForm: React.FC<{ ws: WebSocket | null }> = ({ws}) => {

    const [message, setMessage] = useState('')
    const [isReadyStatus, setIsReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        let openHandler = () => {
            setIsReadyStatus('ready')
        }

        ws?.addEventListener('open', openHandler)
        return () => {
            ws?.removeEventListener('open', openHandler)
        }
    }, [ws])

    const sendMessage = () => {
        if (!message) {
            return
        }
        ws?.send(message)
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
                              disabled={ws === null && isReadyStatus !== 'ready'}/>
            </div>
        </div>
    )
}


export default ChatPage