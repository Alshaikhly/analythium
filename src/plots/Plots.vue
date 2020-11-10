<template>
  <div>
    <plotly
      class="graph"
      v-bind="selected.data.attr"
      :data="selected.data.data"
      :layout="selected.data.layout"
    />
  </div>
</template>

<script>
import samplePlot1 from './samplePlot1';

export default {
  name: 'plots',
  data() {
    return {
      generic: [samplePlot1],
      selected: samplePlot1
    };
  },
  computed: {
    code() {
      // const {
      //   selected: {
      //     data: { attr }
      //   }
      // } = this;
      return `<plotly :data="data" :layout="layout" { displayModeBar: true } />`
    }
  }
}
</script>

<style>

</style>