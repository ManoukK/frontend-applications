<template>
  <div>
    <h1>{{ title }}</h1>

    <article v-for="result in results" v-bind:key="result.title.value">
      <h2>{{ title }}</h2>  
      <h3>{{ result.title.value }}</h3>
      <!-- <img v-bind:src="result.img.value" alt=""> -->
    </article>

  </div>
</template>

<script>
  export default {

    data () {
        return {
            title: "Sieraden",
            results: []
        }
    },

    mounted() {
      /*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
      /*eslint-env browser*/
      /*eslint 'no-console':0*/

        const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-13/sparql"
        //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
        const query = ` 

            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX dc: <http://purl.org/dc/elements/1.1/>
            PREFIX dct: <http://purl.org/dc/terms/>
            PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
            PREFIX edm: <http://www.europeana.eu/schemas/edm/>
            PREFIX foaf: <http://xmlns.com/foaf/0.1/>
            
            SELECT ?obj ?cho ?type ?placeName WHERE {
                VALUES ?type { "sieraad" }
                VALUES ?placeName { "Afrika" }
                ?cho dc:type ?type .
                ?cho dct:spatial ?place .
                ?place skos:prefLabel ?placeName .
                ?obj skos:prefLabel ?objLabel

            } LIMIT 10
            `
        this.runQuery(url, query)

      console.log('results: ', this.results);
      console.log("hallo");

    },

    methods: {
        runQuery(url, query) {
            //Test if the endpoint is up and print result to page
            // (you can improve this script by making the next part of this function wait for a succesful result)
            fetch(url)
            //.then(res => tekst.innerText = "Status of API: " + res.status)
            // Call the url with the query attached, output data
            fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
            .then(res => res.json())
            .then(json => {
                this.results = json.results.bindings;
                //var results = this.results;
                console.log(json.results.bindings);
                
                // console.log(json.results.bindings);
            })
        }
    },
  }
</script>

<style>
</style>