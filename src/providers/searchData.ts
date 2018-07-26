import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/* import { Symptomer1Page } from '../pages/symptomer/1/symptomer1';
import { Symptomer2Page } from '../pages/symptomer/2/symptomer2';
import { Symptomer3Page } from '../pages/symptomer/3/symptomer3';
import { Symptomer4Page } from '../pages/symptomer/4/symptomer4';
import { Symptomer5Page } from '../pages/symptomer/5/symptomer5';
import { Symptomer6Page } from '../pages/symptomer/6/symptomer6';
import { Symptomer7Page } from '../pages/symptomer/7/symptomer7';
import { Symptomer8Page } from '../pages/symptomer/8/symptomer8';

import { Den_siste_tiden1Page } from '../pages/den_siste_tiden/1/den_siste_tiden1';
import { Den_siste_tiden2Page } from '../pages/den_siste_tiden/2/den_siste_tiden2';
import { Den_siste_tiden3Page } from '../pages/den_siste_tiden/3/den_siste_tiden3';
import { Den_siste_tiden4Page } from '../pages/den_siste_tiden/4/den_siste_tiden4';
import { Den_siste_tiden5Page } from '../pages/den_siste_tiden/5/den_siste_tiden5';
import { Den_siste_tiden6Page } from '../pages/den_siste_tiden/6/den_siste_tiden6';

import { Akutte_tilstanderPage } from '../pages/akutte_tilstander/akutte_tilstander';
import { Innhold_bakgrunnPage } from '../pages/innhold_bakgrunn/innhold_bakgrunn';
import { KartleggingPage } from '../pages/kartlegging/kartlegging';
import { KommunikasjonPage } from '../pages/kommunikasjon/kommunikasjon';
import { ProsedyrerPage } from '../pages/prosedyrer/prosedyrer';
import { Aandelig_omsorgPage } from '../pages/aandelig_omsorg/aandelig_omsorg'; */
 
@Injectable()
export class SearchData {
 
    items: any;
 
    constructor() {
 
        this.items = [
            {
                title: 'Akutte tilstander', 
                searchTitle: 
";Akutte tilstander;Truende tverrsnitt;Nye smerter (bryst, rygg, hode, abdomen);\
Blære-/tarmdysfunksjon;Brått oppståtte endringer i funksjonsnivå (f.eks. tap av gangfunksjon, redusert kraft i ekstremiteter, tap av språk);\
Økt trykk fra hjernemetastaser;Endret bevissthet/stemningsleie;Akutt svimmelhet;Kramper;\
Synkope (kortvarig bevissthetstap med fullstendig oppvåkning);Hjertearytmier;Vektøkning/ødemer;Tungpustet;\
Vena cava superior syndrom;Tromboemboli;Sepsis (f.eks. nøytropen feber);Feber;Blødninger;Tumorlysesyndrom;Hyperkalsemi;Delirium;", 
                component: "Akutte_tilstanderPage"},
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
                subtitle: "Tegn på at X er døende",      
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
            let index = item.searchTitle.toLowerCase().indexOf(searchTerm.toLowerCase())
            
            while ( index != -1){
                
                let itemCopy = Object.assign({},this.items[i])
                let endIndex = itemCopy.searchTitle.indexOf(';', index);
                let startIndex = itemCopy.searchTitle.lastIndexOf(';', index - 1)
                let preview = itemCopy.searchTitle.slice(startIndex + 1,endIndex)
                let id = this.findId(preview)
                if (id != -1 ) { preview = preview.slice(0, -2)}
                itemCopy.id = id


                if (preview == itemCopy.title){
                    if ( itemCopy.subtitle && itemCopy.subtitle.toLowerCase().indexOf(searchTerm.toLowerCase()) == -1 ){ 
                        itemCopy.preview = itemCopy.subtitle
                    }
                    else { itemCopy.preview = ""}  
                }
                else { itemCopy.preview = preview }

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