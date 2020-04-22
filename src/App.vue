<template>
  <ion-app>
    <Header/>
    <Messages/>
    <Bottom :emojis="['🔥', '🙂', '💸']" />
  </ion-app>
</template>

<script>
import Header from './components/Header.vue'
import Messages from './components/Messages.vue'
import Bottom from './components/Bottom.vue'

import MessagesPlugin from '@/plugins/messages.js'

export default {
  name: 'App',

  provide: {
    messagesService: new MessagesPlugin()
  },

  components: {
    Header,
    Messages,
    Bottom
  },
  
}
</script>
