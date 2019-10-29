<template>
  <div>
    <article v-for="result in results" v-bind:key="result.title.value">
      <h3>{{ result.title.value }}</h3>
      <img v-bind:src="result.img.value" alt="">
    </article>
  </div>
</template>

<script>
  export default {
    props: {
      results: Array
    },
    mounted() {
      /*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
      /*eslint-env browser*/
      /*eslint 'no-console':0*/
      
      console.log('Results: ', this.results);
      console.log("hallo");
    },
    methods: {
    }
  }
</script>

<style>
</style>