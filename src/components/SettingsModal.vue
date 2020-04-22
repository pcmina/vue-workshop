<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>Settings</ion-title>
        <ion-button @click="dismissModal()" slot="end">Close</ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-item>
            <ion-label>Name:</ion-label>
            <ion-input @ionInput="onNameChange" :value="nameInitValue"	/>
        </ion-item>
    </ion-content>
  </div>
</template>

<script>
export default {
  props: ['dismissModal', 'onNameChange', 'nameInitValue'],
}
</script>