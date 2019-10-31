<template>
    <div>
        <h1>{{ title }}</h1>

        <!--de basis code van Kim (het navigeren binnen buttons) ik heb het zo geschreven dat het bij mij in 1 component gebeurd ipv 2-->
        <button v-on:click="getAfrikaSieraden">Afrika</button>
        <button v-on:click="getBorstSieraden">Borst sieraden</button>
        <button v-on:click="getLipSieraden">Lip sieraden</button>
        <button v-on:click="getHoofdSieraden">Hoofd sieraden</button>

        <!--code van Kim - aangepast naar wat ik zelf wilde zien. Hier worden de opgehaalde items in geloopt-->
        <div id="articlestyle">
            <article v-for="item in items" v-bind:key="item.title.value"> 
                <h3>{{ item.title.value }}</h3>
                <p>{{ item.placeInAfrikaLabel.value }}</p>
                <img v-bind:src="item.img.value" alt="">
            </article>
        </div>
    

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
            url: 'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-13/sparql'
        }
    },

    //van Kim geleerd. Hier word de Afrika query al ingeladen als je op de site komt zodat het niet leeg staat
    created() {
        this.runQuery(this.url, queries.Afrika);
    },

    mounted(){
        queries
    },
    
    //code van Laurens hier word de data uit een query gehaald en word het omgezet in json
    methods: {
        runQuery(url, query) {
            fetch(url+ "?query=" + encodeURIComponent(query) + "&format=json")
            .then(res => res.json())
            .then(json => {
                return json
            })

            .then(res => {
                this.items = res.results.bindings; 
                console.log("printing items 1",this.items);

                //code van Wiebe (img http wordt omgezet in https)
                this.items.forEach(function(i){
                    i.img.value = i.img.value.replace("http", "https");
                });
            })

            .catch(err => console.log(err));
        },
        
        // hier zeg ik uit welke query er data opgehaald moet worden
        getAfrikaSieraden() {
            this.runQuery(this.url, queries.Afrika);
        },

        getBorstSieraden() {
            this.runQuery(this.url, queries.BorstSieraad);
        },

        getLipSieraden() {
            this.runQuery(this.url, queries.LipSieraad);
        },

        getHoofdSieraden() {
            this.runQuery(this.url, queries.HoofdSieraad);
        },
        
    }, 

}

</script>

<style scoped>

#articlestyle {
    display: flex;
    flex-wrap: wrap;
}

article {
    margin: 1em;
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
    margin-bottom: 1em;

}

</style>