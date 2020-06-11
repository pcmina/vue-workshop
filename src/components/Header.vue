<template>
  <ion-header>
    <ion-toolbar id="topBar">
      <ion-title id="title"  slot="start">{{name || "title"}}</ion-title>
      <ion-button @click="openModal" size="small" slot="end" fill="clear">
        <ios-cog-icon id="settingsIcon" w="35px" h="35px"/> 
      </ion-button>
      <button @click="$emit('myClick')"> send event </button>
    </ion-toolbar>
  </ion-header>
</template>

<script>
  import SettingModal from './SettingsModal.vue'

  export default {
    name: 'Header',

    inject:['messagesService'],  

    props: [
      'name'
    ],

    methods: {
      async openModal() {
        const modal = this.$ionic.modalController
        const m = await modal.create({
            component: SettingModal,
            componentProps: {
              propsData: {
                dismissModal: () => modal.dismiss(),
                nameInitValue: this.messagesService.myName,
                onNameChange: (e) => this.messagesService.myName = e.srcElement.value
              },
            },
        })
        m.present()
      },

    },
  }
</script>

<style scoped>
  #topBar{
    --background: orange
  }
  #title {
    color: red
  }
  #settingsIcon {
    fill: blue
  }

</style>