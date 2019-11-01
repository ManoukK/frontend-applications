# Inspiratie voor de modeontwerper
##### Frontend applications - gemaakt door Manouk Kappé

## Opdrachtgever
De opdrachtgever van deze opdracht was het Tropen museum. Samen met 3 andere musea over mensen en cultuur werken zij samen en 
hebben zij een gedeelde collectie. Deze collectie staat online in een database. Het voordeel van deze database is dat het 
ontzettend veel foto’s en objecten bevat uit allerlei landen en tijden. Voor ons was het de bedoeling om iets interessants 
te maken met de gegevens uit de database. Het is een vrije opdracht en je kan alle kanten hiermee opgaan.

## Het concept 
Deze website biedt inspiratie voor mode en sieraden ontwerpers. Zij kunnen door de verschillende delen van de wereld klikken en daarbinnen kunnen zij door de verschillende delen van de continenten heen klikken om inspiratie te krijgen. Waarom sieraden? Sieraden geven detail aan een outfit en daar mag best meer aandacht aangegeven worden hoe mooi sieraden kunnen zijn. Omdat ontwerpers vaak werken met een moodboard zit er ook een functie bij dat je sieraden kan opslaan in je favorietenlijst. Vanuit daar kan de ontwerper op een digitaal canvas moodboards maken met de sieraden die hem/haar inspireert. 

![photo_2019-11-01_10-02-08](https://user-images.githubusercontent.com/45541885/68014008-b7293f00-fc8e-11e9-881a-475a7d906d7f.jpg)
##### Mijn idee uitgewerkt in een schets (home pagina)

![photo_2019-11-01_10-02-10](https://user-images.githubusercontent.com/45541885/68014042-cad4a580-fc8e-11e9-8e4e-9317f77f09bf.jpg)
##### Mijn canvas idee uitgewerkt in een schets (canvas pagina)

![Schermafbeelding 2019-10-31 om 15 08 38](https://user-images.githubusercontent.com/45541885/67954491-5dbf0280-fbf1-11e9-82ea-3fb43285b9ce.png)
##### Mijn uiteindelijke uitwerking op donderdag 31 oktober

## Beschrijving
Ik heb gebruik gemaakt van het framework Vue wat samenhangt met Homebrew. Onder het kopje installatie leg ik uit hoe je dit installeert. Op de website heb je keuze uit verschillende sieraden ik heb hiervoor gekozen omdat het nog best moeilijk was om een query te schrijven voor sieraden in bepaalde gebieden. Dit heb ik dus veranderd naar verschillende soorten sieraden.
Door een deel te selecteren krijg je sieraden uit de database van het tropen museum. De resultaten zijn nu een mix van 
sieraden uit verschillende landen maar normaal gesproken zouden het verschillende soorten sieraden moeten zijn uit 1 deel van een continent. Zo hou je het aanbod divers en krijg je genoeg resultaat om er inspiratie uit te halen. 

Elke sieraad kan opgeslagen worden in een favorieten lijst. Zo kan de gebruiker later terugkomen en behoud hij zijn inspirerende sieraden. Met de opgeslagen sieraden kan de gebruiker een moodboard maken. Dit gebeurt op een leeg canvas en de gebruiker kan die vullen met de sieraden die hem inspireert. Zo geef je de gebruiker een mogelijkheid om ook echt iets met de sieraden te doen. Ze kunnen het uitprinten en gebruiken tijdens het ontwerpen. Dit zou alleen kunnen werken als de gebruiker een account aanmaakt. 

## Installatie 
Om Vue te kunnen gebruiken heb je ook Homebrew nodig als je Macgebruiker bent. Homebrew maakt het makkelijk om npm en 
node te installeren. Mocht je dat al hebben dan hoeft het niet meer. Via deze site kan je Homebrew 
installeren: https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew 

Installeer globally Vue op je computer door:
```
npm install -g @vue/cli
```

Na de installatie check of het is gelukt door:
```
vue --version
```

Als dat goed is gegaan zie je nu de versie en kan je door mijn project te clonen dit project gebruiken. Het clonen kan je in mijn frontend-applications repo doen via de groene knop rechts boven "clone or download"
Mocht iets niet lukken kijk dan naar deze site: https://medium.com/js-dojo/getting-started-with-vuejs-for-web-and-native-285dc64f0f0d 

## Data
De query word omgezet in json. Elk object die word opgehaalt heeft zijn eigen values. Door de array die je terugkrijgt uit te klappen in de console zie je alle objecten. Elk object kan je verder uitklappen. Als je dubbel klikt op een van de termen die er onder komen te staan kan je de value zien die erbij hoort. Zie screenshot hieronder: 

![Schermafbeelding 2019-11-01 om 09 56 47](https://user-images.githubusercontent.com/45541885/68013723-f86d1f00-fc8d-11e9-9563-b806897481f1.png)

Hoe de query word omgezet in json gebeurd met deze code: (credit aan Laurens Aarnoudse)
```
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
},        
```

## Features
Een feature die erin zit is dat je op een van de knoppen kan klikken onder "sieraden voor Afrika". Dit roept een andere query op waardoor je andere resultaten krijgt. Op deze manier kan de gebruiker door de site navigeren. 

In sparql heb ik een query geschreven die data uit de database haalt van het Tropen museum. Om de query te grbuiken moet je de prefixes erin houden. Dit voorkomt de meeste errors. Ik heb ook nog 3 "andere" queries geschreven voor hoofd, lip en borst sieraden. De queries zijn precies hetzelfde als de query hieronder alleen heeft de link (onder SELECT) een andere termmaster code. 

```
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?cho ?title ?type ?typeLabel ?img ?placeInAfrikaLabel WHERE {
<https://hdl.handle.net/20.500.11840/termmaster13201> skos:narrower* ?type .
                
?cho edm:object ?type .
?cho dc:title ?title .
?cho edm:isShownBy ?img .
             
?cho dct:spatial ?placeInAfrika .
?type skos:prefLabel ?typeLabel .

?placeInAfrika skos:prefLabel ?placeInAfrikaLabel .
} LIMIT 20
```

## Dank aan wie mij verder hebben geholpen
-	Laurens Aarnoudse
-	Wessel Smit
- Ivo Zandhuis
-	Mijn Vue team. Iedereen heeft veel kennis gedeeld en vaak geholpen met kleine problemen/vragen. 
(Kim Garrad, Wessel Smit, Roy Csuka, Sjors Eveleens, Coen, Wiebe, Joan, Deanna Bosschert)

Met Kim Garrard heb ik veel samen gewerkt. Wij hebben aan elkaar veel kennis, oplossingen en handige tips gedeeld. 
Dus ook zij bedankt. 

## Bronnen
-	Collectie/database gebruikt van het Tropen museum: https://www.tropenmuseum.nl/nl/onze-collectie-0 
-	Homebrew installatie: https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew
-	Vue installatie + het opzetten van Vue: https://medium.com/js-dojo/getting-started-with-vuejs-for-web-and-native-285dc64f0f0d
-	Hoe je een goede README kan maken: https://www.makeareadme.com 


## Ideeën voor de toekomst
-	Styling aantrekkelijker maken
-	Kunnen filteren op soort materiaal
-	Werelddelen toevoegen
- Binnen de werelddelen op gebied kunnen "filteren"
- Betere queries schrijven die beter resultaat tonen
- Account feature toevoegen zodat gebruikers sieraden kunnen opslaan
- Favorieten knop toevoegen met de mogelijk om favoriete sieraden op te slaan
- Canvas feature toevoegen zodat gebruikers moodboards kunnen maken

## Wat ik heb geleerd
-	Ik begrijp (ongeveer) hoe de terminal werkt. Er zullen zeker meer features zijn die ik nog niet weet maar de basis snap ik.
-	Ik kan nu met Vue werken.
-	Ik weet hoe je met SPARQL informatie kan ophalen uit een database.
-	Common en uncommon javascript/vue problemen oplossen. 
-	Ik kan gebruik maken van de functies van Github. Zoals een README maken (die duidelijk is voor anderen) en 
gebruik maken van de wiki om het proces bij te houden

