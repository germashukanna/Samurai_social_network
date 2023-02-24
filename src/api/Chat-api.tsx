let subscribes = {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[]
}

let socket: WebSocket | null = null
type EventsNamesType = 'messages-received' | 'status-changed'

const closeHandler = () => {
    notifySubscribersAboutStatus('pending')
    setTimeout(createChannel, 3000);
}

let onMessageHandler = (e: MessageEvent) => {
    let newMesseges = JSON.parse(e.data)
    subscribes["messages-received"].forEach(s => s(newMesseges))
}

let openHandler = () => {
    notifySubscribersAboutStatus('ready')
}
let errorHandler = () => {
    notifySubscribersAboutStatus('error')
    console.error('RESTART PAGE')
}

const cleanUp = () => {
    socket?.removeEventListener('close', closeHandler)
    socket?.removeEventListener('message', onMessageHandler)
    socket?.removeEventListener('open', openHandler)
    socket?.removeEventListener('error', errorHandler)
}

const notifySubscribersAboutStatus = (status: StatusType) => {
    subscribes['status-changed'].forEach(s => s(status))
}

function createChannel() {

    cleanUp()
    socket?.close()
    socket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    notifySubscribersAboutStatus('pending')
    socket.addEventListener('close', closeHandler)
    socket.addEventListener('message', onMessageHandler)
    socket.addEventListener('open', openHandler)
    socket.addEventListener('error', errorHandler)
}

export const chatApi = {
    start() {
        createChannel()
    },
    stop() {
        subscribes["messages-received"] = []
        subscribes["status-changed"] = []
        cleanUp()
        socket?.close()
    },
    subscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribes[eventName].push(callback)
        return () => {
            // @ts-ignore
            subscribes[eventName] = subscribes[eventName].filter(s => s !== callback)
        }
    },
    unsubscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribes[eventName] = subscribes[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        socket?.send(message)
    }
}

type MessagesReceivedSubscriberType = (messages: ChatMessageType[]) => void
type StatusChangedSubscriberType = (status: StatusType) => void

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

export type StatusType = 'pending' | 'ready' | 'error'