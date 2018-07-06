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
            {title: 'Akutte Tilstander', searchTitle: "Akutte tilstander", content: "", component: Akutte_tilstanderPage},
            {title: 'Innhold bakgrunn',  searchTitle: "Innhold bakgrunn",  content: "", component: Innhold_bakgrunnPage},
            {title: 'Kartlegging',       searchTitle: "Kartlegging",       content: "", component: KartleggingPage},
            {title: 'Kommunikasjon',     searchTitle: "Kommunikasjon",     content: "", component: KommunikasjonPage},
            {title: 'Prosedyrer',        searchTitle: "Prosedyrer",        content: "", component: ProsedyrerPage},
            {title: 'Åndelig omsorg',    searchTitle: "Åndelig omsorg",    content: "", component: Aandelig_omsorgPage},

            //Symptomer
            {title: 'Smerte',       searchTitle: "Symptomer Smerte",        content: "", component: Symptomer1Page},
            {title: 'Kvalme',       searchTitle: "Symptomer Kvalme",        content: "", component: Symptomer2Page},
            {title: 'Angst/uro',    searchTitle: "Symptomer Angst/uro",     content: "", component: Symptomer3Page},
            {title: 'Delir',        searchTitle: "Symptomer Delir",         content: "", component: Symptomer4Page},
            {title: 'Munntørr',     searchTitle: "Symptomer Munntørr",      content: "", component: Symptomer5Page},
            {title: 'Obstipasjon',  searchTitle: "Symptomer Obstipasjon",   content: "", component: Symptomer6Page},
            {title: 'Matlyst',      searchTitle: "Symptomer Matlyst",       content: "", component: Symptomer7Page},
            {title: 'Tungpust',     searchTitle: "Symptomer Tungpust",      content: "", component: Symptomer8Page},
            //den siste tiden
            {
                title: 'Tegn på at X er døende',       
                searchTitle: "Den siste tiden ",        
                content: "", 
                component: Den_siste_tiden1Page
            },
            {
                title: 'Det gode stellet',             
                searchTitle: "Den siste tiden Det gode stellet ",        
                content: "", 
                component: Den_siste_tiden2Page},
            {
                title: 'Ikke-medikamentell behandling',
                searchTitle: "Den siste tiden Ikke-medikamentell behandling ",        
                content: "", 
                component: Den_siste_tiden3Page
            },
            {
                title: 'Når døden intreffer',          
                searchTitle: "Den siste tiden Når døden intreffer",       
                content: "", 
                component: Den_siste_tiden4Page
            },
            {
                title: 'Medikamentskrinet / lindring av symptomer',
                searchTitle: "Den siste tiden Medikamentskrinet / lindring av symptomer",        
                content: "", 
                component: Den_siste_tiden5Page
            },
            {
                title: 'Ernering og væsketilførsel',   
                searchTitle: "Den siste tiden Ernering og væsketilførsel",        
                content: "", 
                component: Den_siste_tiden6Page
            },
        ]
 
    }
 
    filterItems(searchTerm){
        return this.items.filter((item) => {
            return item.searchTitle.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });    
    }
 
}