<template>
  <div>
    <p class="test"></p>
    <h1>{{ title }}</h1>
    <ul>
      <VragenLijst
        v-bind:results="results"
      />
    </ul>
  </div>
</template>

<script>
    /*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
    /*eslint-env browser*/
    /*eslint 'no-console':0*/
    
    import VragenLijst from './VragenLijst.vue'
    
export default {
        components: {
        VragenLijst
    },
  
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

        const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW-13/sparql"
        //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
        const query = ` 

            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX dc: <http://purl.org/dc/elements/1.1/>
            PREFIX dct: <http://purl.org/dc/terms/>
            PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
            PREFIX edm: <http://www.europeana.eu/schemas/edm/>
            PREFIX foaf: <http://xmlns.com/foaf/0.1/>
            
            SELECT ?cho ?type ?placeName WHERE {
                VALUES ?type { "sieraad" }
                VALUES ?placeName { "Afrika" }
                
                #Variabelen definiëren
                ?cho dc:type ?type .
                ?cho dct:spatial ?place .
                ?place skos:prefLabel ?placeName .

            } LIMIT 10
            `
        this.runQuery(url, query)
            
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
                // console.log(json.results.bindings);
            })
        }
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1 {
  background-color: lightyellow;
  color: grey;
}
</style>