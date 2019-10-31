<template>
  <div id="app">
    <h1>Onze sieraden collectie</h1>
    <navigatieFilter/>
    <Afrika/>

  </div>
</template>

<script>
import navigatieFilter from './components/navigatieFilter.vue'
import Afrika from './components/Afrika.vue'

export default {
  name: 'app',
  components: {
    navigatieFilter,
    Afrika,

  },
}
</script>

<style>
body {
  background-color: #ffffff;
}

div h1 {
  text-align: center;
}

</style>
