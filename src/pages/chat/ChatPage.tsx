import s from './Messages.module.css'
import React, {useEffect, useRef, useState} from "react";
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

    const status = useAppSelector(state => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return (
        <div>
            {status === 'error' && <div>Some error occurred. Please refresh the page</div>}

            <Messages/>
            <AddMessageChatForm/>

        </div>
    )
}

const Messages = () => {

    const messages = useAppSelector(state => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [autoScrollIsActive, setAutoScrollIsActive] = useState(false)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
           !autoScrollIsActive && setAutoScrollIsActive(true)
        }else {
            autoScrollIsActive && setAutoScrollIsActive(false)
        }
    }

    useEffect(() => {
        if (autoScrollIsActive) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }

    }, [messages])
    return (
        <div className={s.messagesContainer} onScroll={scrollHandler}>
            {messages.map((m, index) => <Message key={index} message={m}/>)}
            <div ref={messagesAnchorRef}></div>
        </div>
    )
}

const Message: React.FC<{ message: ChatMessageType }> = React.memo(({message}) => {

    return (
        <div>
            <img src={message.photo} className={s.messageImg}/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
})

const AddMessageChatForm = () => {

    const [message, setMessage] = useState('')
    const status = useAppSelector(state => state.chat.status)

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
                              disabled={status !== 'ready'}/>
            </div>
        </div>
    )
}


export default ChatPage