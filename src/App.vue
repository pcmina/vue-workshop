<template>
  <ion-app>
  </ion-app>
</template>

<script>
import MessagesPlugin from '@/plugins/messages.js'

export default {
  name: 'App',

  provide: {
    messagesService: new MessagesPlugin()
  },
}
</script>
