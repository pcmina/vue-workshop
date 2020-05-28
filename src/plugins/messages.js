import { Subject } from 'rxjs'

export default class {
    
    myName = "John Doe"
    messages = []
    messagesEvent = new Subject()
    

    getOnMessageEvent = () => this.messagesEvent

    sendMessage = (newMessage) => {
        let message = {
            text: newMessage,
            name: this.myName,
        }

        this.messages.push(message)
        this.messagesEvent.next(this.messages)
    }

}
