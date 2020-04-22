<template>
    <ion-content>
        <div id="messagesList">
            <div v-for="(message, i) of messages" :key="i" class="message">   
                <div>
                    <span class="nameTag">{{message.name}}</span>
                    <div class="messageBubble">
                        {{message.text}}
                    </div> 
                </div>
                 <ion-avatar class="avatar">
                    <ios-person-icon w="30px" h="30px" class="avaterIcon"/>
                </ion-avatar>
            </div>
        </div>
    </ion-content>
</template>

<script>
export default {
    inject:['messagesService'],    
    
    mounted() {
        this.messagesService.getOnMessageEvent().subscribe((newMessages) => {
            this.messages = newMessages
        })
    },

    data() {
        return {
            messages: []
        }
    }

}
</script>

<style scoped>
    .message {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        width: 100%;
    }
    .messageBubble{
        border-radius: 15px;
        color: white;
        background: var(--primary);
        padding: 10px;
    }
    .nameTag {
        color: rgba(0,0,0,0.4);
        font-size: 0.8em;
    }
    .avatar {
        width: 40px;
        height: 40px;
        margin: 0px 10px;
        border: solid 2px rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .avaterIcon{
        fill: black;
    }
</style>