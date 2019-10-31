<template>
  <div>
    <h1>{{ title }}</h1>

    <button v-on:click="getAfrikaSieraden">afrika</button>

    <!--code van Kim-->
    <article v-for="item in items" v-bind:key="item.cho.value"> 
      <h3>{{ item.title.value }}</h3>
      <p>{{ item.placeInAfrikaLabel.value }}</p>
      <img v-bind:src="item.img.value" alt="">
    </article>

  </div>
</template>

<script>
/* eslint 'no-console' :0*/

import queries from "../queries.js"

  export default {
    
    name: "QueryResultaten",
    data () {
        return {
            title: "Sieraden uit Afrika",
            items: [],
            // filterData: [],
            url: 'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-13/sparql'
        }
    },
    mounted(){
        //code met this oplossing door Wessel
        queries
        // console.log(this)
        // var self = this
        
        // const url ='https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-13/sparql'
        // const query = `
        //     PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        //     PREFIX dc: <http://purl.org/dc/elements/1.1/>
        //     PREFIX dct: <http://purl.org/dc/terms/>
        //     PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
        //     PREFIX edm: <http://www.europeana.eu/schemas/edm/>
        //     PREFIX foaf: <http://xmlns.com/foaf/0.1/>

        //     SELECT ?cho ?title ?type ?typeLabel ?img ?placeInAfrikaLabel
        //      WHERE {
        //         <https://hdl.handle.net/20.500.11840/termmaster13221> skos:narrower* ?type .
                

        //         ?cho edm:object ?type .
        //         ?cho dc:title ?title .
        //         ?cho edm:isShownBy ?img .
             

        //         ?cho dct:spatial ?placeInAfrika .
        //         ?type skos:prefLabel ?typeLabel .
                
        //         ?placeInAfrika skos:prefLabel ?placeInAfrikaLabel .
        //     } LIMIT 20
        // `;

        //code van Laurens
        // runQuery(url, query)
        // function runQuery(url, query){
        //     fetch(url+ "?query=" + encodeURIComponent(query) + "&format=json")
        //     .then(res => res.json())
        //     .then(json => {
        //         // console.log(json.results.bindings)
        //         return json
        //     })

        //     .then(res => {
        //         self.items = res.results.bindings; 
        //         console.log("printing items 1",self.items);
        //         //code van Wiebe
        //         self.items.forEach(function(i){
        //             i.img.value = i.img.value.replace("http", "https");
        //         });
        //         self.filterData = self.items;
        //     })

        //     .catch(err => console.log(err));
    },
    
    //hier alle buttons
    methods: {
         runQuery(url, query) {
            fetch(url+ "?query=" + encodeURIComponent(query) + "&format=json")
            .then(res => res.json())
            .then(json => {
                // console.log(json.results.bindings)
                return json
            })

            .then(res => {
                self.items = res.results.bindings; 
                console.log("printing items 1",self.items);
                //code van Wiebe
                self.items.forEach(function(i){
                    i.img.value = i.img.value.replace("http", "https");
                });
                // self.filterData = self.items;
            })

            .catch(err => console.log(err));

        // onFilter() {
        //     filterData = this.filterData;
        //     let filterData = [];

        //     this.items.forEach(function (item) {
        //         if(item.title.value === "Hoofdsieraad"){
        //             filterData.push(item)
        //         }
        //     })
            
        //     console.log("gefilterde data: ", filterData);
            
        // }
        },
        
        getAfrikaSieraden() {
            this.runQuery(this.url, queries.Afrika);
        }
        
    }, 

}

</script>

<style scoped>

article {
    background-color: #ff964b;
    width: 20em;
    border-radius: 1em;
    box-shadow: 10px 10px #ff573f;
}

article h3 {
    padding-top: 1em;
}

article h3, p {
    text-align: center;

}

img {
    display: block;
    width: 80%;
    padding-left: center;
    margin-left: auto;
    margin-right: auto;

}

</style>