# Inspiratie voor de modeontwerper
##### Frontend applications - gemaakt door Manouk Kappé

## Opdrachtgever
De opdrachtgever van deze opdracht was het Tropen museum. Samen met 3 andere musea over mensen en cultuur werken zij samen en 
hebben zij een gedeelde collectie. Deze collectie staat online in een database. Het voordeel van deze database is dat het 
ontzettend veel foto’s en objecten bevat uit allerlei landen en tijden. Voor ons was het de bedoeling om iets interessants 
te maken met de gegevens uit de database. Het is een vrije opdracht en je kan alle kanten hiermee opgaan.

## Het concept 
Deze website biedt inspiratie voor mode en sieraden ontwerpers. Zij kunnen door de verschillende delen van de wereld klikken en daar binnen kunnen zij door de verschillende delen van de continenten heen klikken om inspiratie te krijgen. Waarom sieraden? Sieraden geven detail aan een outfit en daar mag best meer aandacht aangegeven worden hoe mooi sieraden kunnen zijn. 

![photo_2019-10-31_12-12-52](https://user-images.githubusercontent.com/45541885/67942607-7bcc3900-fbd8-11e9-956a-c1ec3274b94b.jpg)

## Beschrijving
Ik heb gebruik gemaakt van het framework Vue wat samenhangt met Homebrew. Onder het kopje installatie leg ik uit hoe je 
dit installeert. Op de website heb je keuze uit verschillende sieraden ik heb hier voor gekozen omdat het nog best moeilijk was om een query te schrijven voor sieraden in bepaalde gebieden. Dit heb ik dus veranderd naar verschillende soorten sieraden.
Door een deel te selecteren krijg je sieraden uit de database van het tropen museum. De resultaten zijn nu een mix van 
sieraden uit verschillende landen maar normaal gesproken zouden het verschillende soorten sieraden moeten zijn uit 1 deel van een continent. Zo hou je het aanbod divers en krijg je genoeg resultaat om er inspiratie uit te halen. 

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

Als dat goed is gegaan zie je nu de versie en kan je door mijn project te clonen dit project gebruiken. 
Mocht iets niet lukken kijk dan naar deze site: https://medium.com/js-dojo/getting-started-with-vuejs-for-web-and-native-285dc64f0f0d 

## Features
Wat nog moet komen: (hopelijk kan je op de site op een deel uit Afrika klikken en krijg je sieraden te zien uit dat deel. 
Als je verder wilt klikken krijg je een detail pagina te zien te zien met informatie over het object)

In sparql heb ik een query geschreven die data uit de database haalt van het Tropen museum. Om de query te grbuiken moet je de prefixes erin houden. Dit voorkomt de meeste errors. 

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
-	Kunnen filteren op soort sieraad en soort materiaal
-	Werelddelen toevoegen
- Betere queries schrijven die beter resultaat tonen

## Wat ik heb geleerd
-	Ik begrijp (ongeveer) hoe de terminal werkt. Er zullen zeker meer features zijn die ik nog niet weet maar de basis snap ik.
-	Ik kan nu met Vue werken.
-	Ik weet hoe je met SPARQL informatie kan ophalen uit een database.
-	Common en uncommon javascript/vue problemen oplossen. 
-	Ik kan gebruik maken van de functies van Github. Zoals een README maken (die duidelijk is voor anderen) en 
gebruik maken van de wiki om het proces bij te houden.  

 
