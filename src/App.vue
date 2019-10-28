<template>
  <div id="app">
    <h1>hallo :)</h1>

    <article>
      <p>
        test test
      </p>
    </article>
    <QueryResultaten/>
  
  </div>
</template>

<script>
import QueryResultaten from './components/QueryResultaten.vue'


export default {
  name: 'app',
  components: {
    QueryResultaten,

  }
}
</script>

<style>
  article {
    background-color: lightblue;
  }

</style>
