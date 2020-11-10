<template>
  <ion-page>
    <ion-header>
      <ion-title>Home</ion-title>
    </ion-header>
    <ion-content>
      <div id="container">
      <strong>Variable A</strong>
      <p>Welcome to NHANES project</p>
      <Plots />
      <!-- <div id="plot1" style="width:600px;height:400px;"></div>
      <div id="plot2" style="width:600px;height:400px;"></div> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import Plots from '../plots/Plots'

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
} from '@ionic/vue';

import { defineComponent } from 'vue';


export default defineComponent({
  name: 'VariableA',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    Plots
  },
  computed: {
    code() {
      return '<plotly :data="data" :layout="layout" {displaylogo: false} />'
    }
  }
  });

</script>

<style>

</style>