<template>
  <ion-page>
    <ion-header>
      <ion-title>Home</ion-title>
    </ion-header>
    <ion-content>
      <div id="container">
      <strong>Hello world</strong>
      <p>Welcome to NHANES project</p>
      <li>General Info</li>
      <li>How to use</li>
      <li>Data Description</li>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle
  }
});

</script>

<style>
#container {
  margin-top: 5%;
}
</style>