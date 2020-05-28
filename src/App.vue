<template>
  <ion-app>
  </ion-app>
</template>

<script>
import MessagesPlugin from '@/plugins/messages.js'

const messagesService = new MessagesPlugin()

export default {
  name: 'App',

  components: {},


  provide: {messagesService},
}
</script>
