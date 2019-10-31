<template>
  <div>
    <h1>{{ title }}</h1>
    <!--code van Kim-->
    <article v-for="item in items" v-bind:key="item.title.value"> 
      <h3>{{ item.title.value }}</h3>
      <p>{{ item.placeName.value }}</p>
      <p>{{ item.mediumName.value }}</p>
      <img v-bind:src="item.img.value" alt="">

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
        //code van/door Wessel
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

                    SELECT ?cat ?title ?type ?placeName ?cho ?mediumName ?img WHERE {
                        <http://hdl.handle.net/20.500.11840/termmaster2713> skos:narrower* ?cat .
                        ?cho dc:title ?title .
                        ?cho dc:type ?type .
                        ?cho dct:spatial ?place .
                        ?place skos:prefLabel ?placeName .
                        ?cho dct:medium ?medium .
                        ?medium skos:prefLabel ?mediumName .
                        ?cho edm:isShownBy ?img .

                    } LIMIT 25
        `;
        //code van Laurens
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
                
                //code van Wiebe
                self.forEach(function(i){
                    i.img.value = i.img.value.replace("http", "https");
                })
            })

            .catch(err => console.log(err));
        }
    }
}
</script>

<style scoped>

article {
    border-style: solid;
    border-color: lightgrey;
}

img {
    width: 30%;
}

</style>