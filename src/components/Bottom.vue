<template>
    <ion-footer id="bottomBar">
      <ion-item lines="none" id="bottom" class="bootomItem">
        <b-popover target="emijiKeyboard" triggers="hover" placement="top">
          <template v-slot:title>Emoji</template>
          <ion-button v-for="emoji of emojis" :key="emoji" @click="text += emoji" fill="clear">
            {{emoji}}
          </ion-button>
        </b-popover>

        <ion-button id="emijiKeyboard" fill="clear" class="iconPrimaryColor">
          <ios-happy-icon w="30px" h="30px"  />
        </ion-button>
        <input id="messageInput" v-model="text" placeholder="Message" type="text">
        <ion-button @click="sendMessage" :disabled="text == ''" fill="clear">
          <ios-send-icon w="30px" h="30px" class="iconPrimaryColor"  />
        </ion-button>
      </ion-item>
    </ion-footer>
</template>

<script>
  export default {
    inject: ['messagesService'],
    
    props: ['emojis'],

    data() {
        return {
            text: '',
        }
    },

    methods: {
      sendMessage() {
        this.messagesService.sendMessage(this.text)
        this.text = ''
      }
    }
  }
</script>

<style scoped>
  #bottomBar{
    background: #eeeeee;
  }

  .iconPrimaryColor {
    fill: var(--primary)
  }

  #messageInput{
    background: rgba(0,0,0,0.2);
    color: black;
    
    border-radius: 250px;
    padding: 10px;
    width: 100%;
    border: none
  }

  .bootomItem{
    padding: 5px 0px;
    border: none;
    --background: transparent;
  }
</style>