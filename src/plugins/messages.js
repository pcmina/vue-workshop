import { Subject } from 'rxjs'

export default class {
    
    myName = "John Doe"
    messages = []
    messagesEvent = new Subject()
    socket

    constructor() {
        this.connectToServer()
    }


    getOnMessageEvent = () => this.messagesEvent

    sendMessage = (newMessage) => {
        let message = {
            text: newMessage,
            name: this.myName,
            isMine: true
        }
        this.messages.push(message)
        this.messagesEvent.next(this.messages)
    }
    
    connectToServer = () => {
        this.socket = new WebSocket('ws://localhost:8080')
        this.socket.addEventListener('open', () => {
            this.socket.addEventListener('message', () =>  {
                debugger

            })
        })
    }


}
