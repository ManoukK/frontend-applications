<template>
    <div>
        <h1>Hallo</h1>
        <p>dit is een test</p>
        <h2>HOIHOIHOI</h2>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
            /*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
            /*eslint-env browser*/
            /*eslint 'no-console':0*/

            const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-40/sparql"
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
                ?cho dc:type ?type .
                ?cho dct:spatial ?place .
                ?place skos:prefLabel ?placeName .
            } LIMIT 200
            `
            runQuery(url, query)

            function runQuery(url, query){
            //Test if the endpoint is up and print result to page 
            // (you can improve this script by making the next part of this function wait for a succesful result)
            fetch(url)
             // .then(res => tekst.innerText = "Status of API: " + res.status)
            // Call the url with the query attached, output data
            fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    console.table(json.results.bindings);
                    console.log(json.results.bindings[0].catName.value);
                })
            }
        }
}
</script>

<style>
    h1 { 
        background-color: #333333;
    }
</style>








#Variabelen definiëren
                    ?cho dc:title ?title . #Title
                    ?cho edm:isRelatedTo ?cat . #Categorie
                    ?cat skos:prefLabel ?catName .
                    ?cho dc:type ?type .
                    ?cho edm:isShownBy ?img .