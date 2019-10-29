<template>
  <div>
    <h1>{{ title }}</h1>

    <article v-for="item in items" v-bind:key="item.placeName.value">
      <h2>{{ title }}</h2>  
      <h3>{{ item.placeName.value }}</h3>
      <!-- <img v-bind:src="items.img.value" alt=""> -->
    </article>

  </div>
</template>

<script>
/* eslint 'no-console' :0*/

  export default {
    name: "QueryResultaten",
    data () {
        return {
            title: "Sieraden",
            items: []
        }
    },
    created(){
        console.log(this)
        var self = this
        const url ='https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-13/sparql'
        const query = `
                    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                    PREFIX dc: <http://purl.org/dc/elements/1.1/>
                    PREFIX dct: <http://purl.org/dc/terms/>
                    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
                    PREFIX edm: <http://www.europeana.eu/schemas/edm/>
                    PREFIX foaf: <http://xmlns.com/foaf/0.1/>
                    
                    SELECT ?obj ?cho ?type ?placeName WHERE {
                        VALUES ?type { 'sieraad' }
                        VALUES ?placeName { 'Afrika' }
                        ?cho dc:type ?type .
                        ?cho dct:spatial ?place .
                        ?place skos:prefLabel ?placeName .
                        ?obj skos:prefLabel ?objLabel

                    } LIMIT 10
        `;
        runQuery(url, query)
        function runQuery(url, query){
            fetch(url+ "?query=" + encodeURIComponent(query) + "&format=json")
            .then(res => res.json())
            .then(json => {
                console.log(json.results.bindings)
                return json
            })
            .then(res => {
                console.log(self);
                self.items = res.results.bindings;
                
            })
            .catch(err => console.log(err));
        }
    }
}
</script>

<style scoped>

div {
    background-color: lightgreen;
}

</style>