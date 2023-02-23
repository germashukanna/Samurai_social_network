let subscribes = [] as SubscriberType[]

let socket: WebSocket | null = null

const closeHandler = () => {
    setTimeout(createChannel, 3000);
}

let onMessageHandler = (e: MessageEvent) => {
    let newMesseges = JSON.parse(e.data)
    subscribes.forEach(s => s(newMesseges))
}

function createChannel() {

    socket?.removeEventListener('close', closeHandler)
    socket?.close()

    socket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    socket.addEventListener('close', closeHandler)
    socket.addEventListener('message', onMessageHandler)
}

export const chatApi = {
    start() {
        createChannel()
    },
    stop() {
        subscribes = []
        socket?.removeEventListener('close', closeHandler)
        socket?.removeEventListener('message', onMessageHandler)
        socket?.close()
    },
    subscribe(callback: SubscriberType) {
        subscribes.push(callback)
        return () => {
            subscribes = subscribes.filter(s => s !== callback)
        }
    },
    unsubscribe(callback: SubscriberType) {
        subscribes = subscribes.filter(s => s !== callback)
    },
    sendMessage(message: string) {
        socket?.send(message)
    }
}

type SubscriberType = (messages: ChatMessageType[]) => void

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}