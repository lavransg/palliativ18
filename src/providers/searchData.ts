import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Symptomer1Page } from '../pages/symptomer/1/symptomer1';
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
import { Aandelig_omsorgPage } from '../pages/aandelig_omsorg/aandelig_omsorg';
 
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
                component: Akutte_tilstanderPage},
            {title: 'Innhold / bakgrunn',searchTitle: ";Innhold / bakgrunn;Bakgrunn;Innledning;",component: Innhold_bakgrunnPage},
            {title: 'Kartlegging',       searchTitle: ";Kartlegging;",       component: KartleggingPage},
            {title: 'Kommunikasjon',     searchTitle: ";Kommunikasjon;",     component: KommunikasjonPage},
            {title: 'Prosedyrer',        searchTitle: ";Prosedyrer;",        component: ProsedyrerPage},
            {title: 'Åndelig omsorg',    searchTitle: ";Åndelig omsorg;",    component: Aandelig_omsorgPage},

            //Symptomer
            {
                title: 'Symptomer', 
                subtitle: "Smerte",        
                searchTitle: ";Symptomer;Smerte;Smerte: Tiltak;Smerte: Medikamenter og behandling;Smerte: Grunnleggende kartlegging;Skjema;",        
                component: Symptomer1Page},
            {
                title: 'Symptomer', 
                subtitle: "Kvalme",        
                searchTitle: ";Symptomer;Kvalme;Kvalme: Tiltak;Kvalme: Medikamenter og behandling;Kvalme: Grunnleggende kartlegging;",        
                component: Symptomer2Page},
            {
                title: 'Symptomer', 
                subtitle: "Angst/uro",     
                searchTitle: ";Symptomer;Angst/uro;Angst/uro: Tiltak;Angst/uro: Medikamenter og behandling;Angst/uro: Grunnleggende kartlegging;",     
                component: Symptomer3Page},
            {
                title: 'Symptomer', 
                subtitle: "Delir",         
                searchTitle: ";Symptomer;Delir;Delir: Tiltak;Delir: Medikamenter og behandling;Delir: Grunnleggende kartlegging;",         
                component: Symptomer4Page},
            {
                title: 'Symptomer', 
                subtitle: "Munntørr",      
                searchTitle: ";Symptomer;Munntørr;Munntørr: Tiltak;Munntørr: Medikamenter og behandling;Munntørr: Grunnleggende kartlegging;",      
                component: Symptomer5Page},
            {
                title: 'Symptomer', 
                subtitle: "Obstipasjon",   
                searchTitle: ";Symptomer;Obstipasjon;Obstipasjon: Tiltak;Obstipasjon: Medikamenter og behandling;Obstipasjon: Grunnleggende kartlegging;",   
                component: Symptomer6Page},
            {
                title: 'Symptomer', 
                subtitle: "Matlyst",       
                searchTitle: ";Symptomer;Matlyst;Matlyst: Tiltak;Matlyst: Medikamenter og behandling;Matlyst: Grunnleggende kartlegging;",       
                component: Symptomer7Page},
            {
                title: 'Symptomer', 
                subtitle: "Tungpust",      
                searchTitle: ";Symptomer;Tungpust;Tungpust: Tiltak;Tungpust: Medikamenter og behandling;Tungpust: Grunnleggende kartlegging;",      
                component: Symptomer8Page},
            
                //den siste tiden
            {
                title: 'Den siste tiden',
                subtitle: "Tegn på at X er døende",      
                searchTitle: ";Den siste tiden;Tegn på at X er døende;",        
                component: Den_siste_tiden1Page
            },
            {
                title: 'Den siste tiden',
                subtitle: "Det gode stellet",             
                searchTitle: ";Den siste tiden;Det gode stellet;",        
                component: Den_siste_tiden2Page},
            {
                title: 'Den siste tiden',
                subtitle: "Ikke-medikamentell behandling",
                searchTitle: ";Den siste tiden;Ikke-medikamentell behandling;",        
                component: Den_siste_tiden3Page
            },
            {
                title: 'Den siste tiden',
                subtitle: "Når døden inntreffer",          
                searchTitle: ";Den siste tiden;Når døden inntreffer;",       
                component: Den_siste_tiden4Page
            },
            {
                title: 'Den siste tiden',
                subtitle: "Medikamentskrinet / lindring av symptomer",
                searchTitle: ";Den siste tiden;Medikamentskrinet / lindring av symptomer;",        
                component: Den_siste_tiden5Page
            },
            {
                title: 'Den siste tiden',
                subtitle: "Ernering og væsketilførsel",   
                searchTitle: ";Den siste tiden;Ernering og væsketilførsel;",        
                component: Den_siste_tiden6Page
            },
        ]
 
    }
    
    filterItems(searchTerm){
        let results = [];
        results = this.items.filter((item) => {
            let termIndex = item.searchTitle.toLowerCase().indexOf(searchTerm.toLowerCase())
            if ( termIndex > -1){
                let endIndex = item.searchTitle.indexOf(';', termIndex);
                let startIndex = item.searchTitle.lastIndexOf(';',endIndex -1)
                let preview = item.searchTitle.slice(startIndex + 1,endIndex)
                
                if (preview == item.title){
                    
                    if ( item.subtitle ){ item.preview = item.subtitle }
                    else { item.preview = "" }
                }
                else { item.preview = preview }
                return true
            }
            else { return false }
        });
        
        //////////////////////// TEST
        let results2 = []
        for (let i = 0; i < this.items.length; i++){
            let item = this.items[i]
            let index = item.searchTitle.toLowerCase().indexOf(searchTerm.toLowerCase())
            while ( index != -1){
                let itemCopy = Object.assign({},this.items[i])
                let endIndex = item.searchTitle.indexOf(';', index);
                let startIndex = item.searchTitle.lastIndexOf(';',endIndex -1)
                let preview = item.searchTitle.slice(startIndex + 1,endIndex)
                if (preview == item.title){
                    console.log("preview: ",preview, " title: ", item.title)
                    if ( item.subtitle ){ itemCopy.preview = item.subtitle }
                    else { itemCopy.preview = ""}
                }
                else {
                    console.log("preview2: ",preview, " title2: ", itemCopy.title)
                    itemCopy.preview = preview 
                }
                let nextIndex = item.searchTitle.indexOf(';', index);
                if (nextIndex > -1){
                    index = item.searchTitle.toLowerCase().indexOf(searchTerm.toLowerCase(),nextIndex +1)
                }
                else { index = -1 }
                results2.push(itemCopy)
            }
        }
        console.log("results2: ", results2)
        ////////////////////////////

        return results2;

    }

    findItems(searchTerm){

    }
 
}