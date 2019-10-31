export default {
    Afrika: `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX dc: <http://purl.org/dc/elements/1.1/>
            PREFIX dct: <http://purl.org/dc/terms/>
            PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
            PREFIX edm: <http://www.europeana.eu/schemas/edm/>
            PREFIX foaf: <http://xmlns.com/foaf/0.1/>

            SELECT ?cho ?title ?type ?typeLabel ?img ?placeInAfrikaLabel
             WHERE {
                <https://hdl.handle.net/20.500.11840/termmaster13201> skos:narrower* ?type .
                
                

                ?cho edm:object ?type .
                ?cho dc:title ?title .
                ?cho edm:isShownBy ?img .
             

                ?cho dct:spatial ?placeInAfrika .
                ?type skos:prefLabel ?typeLabel .
                
                ?placeInAfrika skos:prefLabel ?placeInAfrikaLabel .
            } LIMIT 20
    `,

    BorstSieraad: `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX dc: <http://purl.org/dc/elements/1.1/>
        PREFIX dct: <http://purl.org/dc/terms/>
        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
        PREFIX edm: <http://www.europeana.eu/schemas/edm/>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>

        SELECT ?cho ?title ?type ?typeLabel ?img ?placeInAfrikaLabel
         WHERE {
            <https://hdl.handle.net/20.500.11840/termmaster13221> skos:narrower* ?type .
            
            

            ?cho edm:object ?type .
            ?cho dc:title ?title .
            ?cho edm:isShownBy ?img .
         

            ?cho dct:spatial ?placeInAfrika .
            ?type skos:prefLabel ?typeLabel .
            
            ?placeInAfrika skos:prefLabel ?placeInAfrikaLabel .
        } LIMIT 20
    `,

    LipSieraad: `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX dc: <http://purl.org/dc/elements/1.1/>
        PREFIX dct: <http://purl.org/dc/terms/>
        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
        PREFIX edm: <http://www.europeana.eu/schemas/edm/>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>

        SELECT ?cho ?title ?type ?typeLabel ?img ?placeInAfrikaLabel
         WHERE {
            <https://hdl.handle.net/20.500.11840/termmaster13150> skos:narrower* ?type .
            

            ?cho edm:object ?type .
            ?cho dc:title ?title .
            ?cho edm:isShownBy ?img .
         

            ?cho dct:spatial ?placeInAfrika .
            ?type skos:prefLabel ?typeLabel .
            
            ?placeInAfrika skos:prefLabel ?placeInAfrikaLabel .
        } LIMIT 20
    `,

    HoofdSieraad: `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX dc: <http://purl.org/dc/elements/1.1/>
        PREFIX dct: <http://purl.org/dc/terms/>
        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
        PREFIX edm: <http://www.europeana.eu/schemas/edm/>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>

        SELECT ?cho ?title ?type ?typeLabel ?img ?placeInAfrikaLabel
         WHERE {
            <https://hdl.handle.net/20.500.11840/termmaster13146> skos:narrower* ?type .
            

            ?cho edm:object ?type .
            ?cho dc:title ?title .
            ?cho edm:isShownBy ?img .
         

            ?cho dct:spatial ?placeInAfrika .
            ?type skos:prefLabel ?typeLabel .
            
            ?placeInAfrika skos:prefLabel ?placeInAfrikaLabel .
        } LIMIT 20
    `,

}