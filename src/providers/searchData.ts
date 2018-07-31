import { Injectable } from '@angular/core';
 
@Injectable()
export class SearchData {
 
    items: any;
 
    constructor() {
 
        // this array is used for matching search-terms with pages.
        // in "searchTitle", the terms are separated with ";" and the number after "|" denotes the element id for scrollTo purposes
        this.items = [
            {
                title: 'Akutte tilstander', 
                searchTitle: 
";Akutte tilstander;Truende tverrsnitt;Nye smerter (bryst, rygg, hode, abdomen);\
Blære-/tarmdysfunksjon;Brått oppståtte endringer i funksjonsnivå (f.eks. tap av gangfunksjon, redusert kraft i ekstremiteter, tap av språk);\
Økt trykk fra hjernemetastaser;Endret bevissthet/stemningsleie;Akutt svimmelhet;Kramper;\
Synkope (kortvarig bevissthetstap med fullstendig oppvåkning);Hjertearytmier;Vektøkning/ødemer;Tungpustet;\
Vena cava superior syndrom;Tromboemboli;Sepsis (f.eks. nøytropen feber);Feber;Blødninger;Tumorlysesyndrom;Hyperkalsemi;Delirium;", 
                component: "Akutte_tilstanderPage"
            },
            {title: 'Innhold / bakgrunn',searchTitle: ";Innhold / bakgrunn;Bakgrunn|2;Innledning|1;",component: "Innhold_bakgrunnPage"},
            {title: 'Kartlegging',       searchTitle: ";Kartlegging;",       component: "KartleggingPage"},
            {title: 'Kommunikasjon',     searchTitle: ";Kommunikasjon;Forberedende samtale om livets sluttfase|1;Samtale med pårørende|2;",     component: "KommunikasjonPage"},
            {title: 'Prosedyrer',        searchTitle: ";Prosedyrer;",        component: "ProsedyrerPage"},
            {title: 'Åndelig omsorg',    searchTitle: ";Åndelig omsorg;Tiltak|2;",    component: "Aandelig_omsorgPage"},

            //Symptomer
            {
                title: 'Symptomer', 
                subtitle: "Smerte",        
                searchTitle: ";Symptomer;Smerte;Smerte: Tiltak|3;Smerte: Medikamenter og behandling|2;Smerte: Grunnleggende kartlegging|1;Skjema|4;",        
                component: "Symptomer1Page"},
            {
                title: 'Symptomer', 
                subtitle: "Kvalme",        
                searchTitle: ";Symptomer;Kvalme|1;Kvalme: Tiltak|4;Kvalme: Medikamenter og behandling|2;Kvalme: Grunnleggende kartlegging|3;",        
                component: "Symptomer2Page"},
            {
                title: 'Symptomer', 
                subtitle: "Angst/uro",     
                searchTitle: ";Symptomer;Angst/uro|1;Angst/uro: Tiltak|4;Angst/uro: Medikamenter og behandling|3;Angst/uro: Grunnleggende kartlegging|2;",     
                component: "Symptomer3Page"},
            {
                title: 'Symptomer', 
                subtitle: "Delir",         
                searchTitle: ";Symptomer;Delir|1;Delir: Tiltak|4;Delir: Medikamenter og behandling|3;Delir: Grunnleggende kartlegging|2;",         
                component: "Symptomer4Page"},
            {
                title: 'Symptomer', 
                subtitle: "Munntørr",      
                searchTitle: ";Symptomer;Munntørr|1;Munntørr: Tiltak|4;Munntørr: Medikamenter og behandling|3;Munntørr: Grunnleggende kartlegging|2;",      
                component: "Symptomer5Page"},
            {
                title: 'Symptomer', 
                subtitle: "Obstipasjon",   
                searchTitle: ";Symptomer;Obstipasjon|1;Obstipasjon: Tiltak|4;Obstipasjon: Medikamenter og behandling|3;Obstipasjon: Grunnleggende kartlegging|2;",   
                component: "Symptomer6Page"},
            {
                title: 'Symptomer', 
                subtitle: "Matlyst",       
                searchTitle: ";Symptomer;Matlyst|1;Matlyst: Tiltak|4;Matlyst: Medikamenter og behandling|3;Matlyst: Grunnleggende kartlegging|2;",       
                component: "Symptomer7Page"},
            {
                title: 'Symptomer', 
                subtitle: "Tungpust",      
                searchTitle: ";Symptomer;Tungpust|1;Tungpust: Tiltak|4;Tungpust: Medikamenter og behandling|3;Tungpust: Grunnleggende kartlegging|2;",      
                component: "Symptomer8Page"},
            
                //den siste tiden
            {
                title: "Den siste tiden",
                subtitle: "Tegn på at pasienten er døende",      
                searchTitle: ";Den siste tiden;Tegn på at Pasienten er døende|1;Terminalfasen|2;",        
                component: "Den_siste_tiden1Page"
            },
            {
                title: "Den siste tiden",
                subtitle: "Det gode stellet",             
                searchTitle: ";Den siste tiden;Det gode stellet|1;Det gode stellet: Tiltak|2;Det gode stellet: Munnstell hos døende|3;",        
                component: "Den_siste_tiden2Page"},
            {
                title: "Den siste tiden",
                subtitle: "Ikke-medikamentell behandling",
                searchTitle: ";Den siste tiden;Ikke-medikamentell behandling|1;Massasje|2;Temperatur|3;Musikk|4;Avledning|5;Tankereiser|6;",        
                component: "Den_siste_tiden3Page"
            },
            {
                title: "Den siste tiden",
                subtitle: "Når døden inntreffer",          
                searchTitle: ";Den siste tiden;Når døden inntreffer|1;Når døden inntreffer: Tiltak|2;",       
                component: "Den_siste_tiden4Page"
            },
            {
                title: "Den siste tiden",
                subtitle: "Medikamentskrinet / lindring av symptomer",
                searchTitle: ";Den siste tiden;Medikamentskrinet / lindring av symptomer;",        
                component: "Den_siste_tiden5Page"
            },
            {
                title: "Den siste tiden",
                subtitle: "Ernering og væsketilførsel",   
                searchTitle: ";Den siste tiden;Ernering og væsketilførsel;",        
                component: "Den_siste_tiden6Page"
            },
        ]
 
    }
    
    filterItems(searchTerm){
        let results = []
        for (let i = 0; i < this.items.length; i++){
            let item = this.items[i]
            let index = item.searchTitle.toLowerCase().indexOf(searchTerm.toLowerCase()) // index of first found searchTerm
            
            while ( index != -1){
                
                let itemCopy = Object.assign({},this.items[i]) // make a copy to not edit the actual searchable items
                let endIndex = itemCopy.searchTitle.indexOf(';', index); // find the indexes (indices?) of ";" to the left and right of the found term
                let startIndex = itemCopy.searchTitle.lastIndexOf(';', index - 1)
                let preview = itemCopy.searchTitle.slice(startIndex + 1,endIndex) // set the preview to be everything between the ";"
                let id = this.findId(preview) // check for the "|id" for purposes of scrolling to the found element
                if (id != -1 ) { preview = preview.slice(0, -2)} // remove the "|id"
                itemCopy.id = id

                if (preview == itemCopy.title){
                    // if the prewiev is the title of the page, has a subtitle, and the subtitle does not contain the search term,
                    // we guve the prewiev the subtitle
                    if ( itemCopy.subtitle && itemCopy.subtitle.toLowerCase().indexOf(searchTerm.toLowerCase()) == -1 ){ 
                        itemCopy.preview = itemCopy.subtitle
                    }
                    // otherwise, the page has no subtitle ( it is a main page)
                    else { itemCopy.preview = ""}  
                }
                // other-otherwise, the prewiev is the name of the page subsection
                else { itemCopy.preview = preview }

                // look for the next searchTerm match after the following ";"
                let nextIndex = itemCopy.searchTitle.indexOf(';', index);
                index = nextIndex > -1 ? itemCopy.searchTitle.toLowerCase().indexOf(searchTerm.toLowerCase(),nextIndex +1) : -1
                results.push(itemCopy)

            }
        }
        return results;
    }

    findId(string){
        let index = string.lastIndexOf('|')
        return index != -1 ? string.slice(index + 1) : -1
    }
 
}