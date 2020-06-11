<template>
  <ion-app>
    <Header name="Hello World"/>
    <Messages/>
    <Bottom :emojis="['🙈', '🚀', '🦉']"/>
  </ion-app>
</template>

<script>
import MessagesPlugin from '@/plugins/messages.js'

import Header from '@/components/Header.vue'
import Messages from '@/components/Messages.vue'
import Bottom from '@/components/Bottom.vue'

const messagesService = new MessagesPlugin()

export default {
  name: 'App',

  components: {
      Header,
      Bottom,
      Messages
  },


  provide: {messagesService},
}
</script>
