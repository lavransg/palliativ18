import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/* import {Symptomer1Page} from '../symptomer/1/symptomer1';
import {Symptomer2Page} from '../symptomer/2/symptomer2';
import {Symptomer3Page} from '../symptomer/3/symptomer3';
import {Symptomer4Page} from '../symptomer/4/symptomer4';
import {Symptomer5Page} from '../symptomer/5/symptomer5';
import {Symptomer6Page} from '../symptomer/6/symptomer6';
import {Symptomer7Page} from '../symptomer/7/symptomer7';
import {Symptomer8Page} from '../symptomer/8/symptomer8'; */

/* import { Den_siste_tiden1Page } from '../den_siste_tiden/1/den_siste_tiden1';
import { Den_siste_tiden2Page } from '../den_siste_tiden/2/den_siste_tiden2';
import { Den_siste_tiden3Page } from '../den_siste_tiden/3/den_siste_tiden3';
import { Den_siste_tiden4Page } from '../den_siste_tiden/4/den_siste_tiden4';
import { Den_siste_tiden5Page } from '../den_siste_tiden/5/den_siste_tiden5';
import { Den_siste_tiden6Page } from '../den_siste_tiden/6/den_siste_tiden6'; */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  pages: any[];
  title: string;
  symptomer: any[] = [
    {title: "Smerte",     component: "Symptomer1Page"},
    {title: "Kvalme",     component: "Symptomer2Page"},
    {title: "Angst/uro",  component: "Symptomer3Page"},
    {title: "Delir",      component: "Symptomer4Page"},
    {title: "Munntørr",   component: "Symptomer5Page"},
    {title: "Obstipasjon",component: "Symptomer6Page"},
    {title: "Matlyst",    component: "Symptomer7Page"},
    {title: "Tungpust",   component: "Symptomer8Page"},
  ]
  denSisteTiden: any[] = [
    {title: 'Tegn på at X er døende',                   component: "Den_siste_tiden1Page"},
    {title: 'Det gode stellet',                         component: "Den_siste_tiden2Page"},
    {title: 'Ikke-medikamentell behandling',            component: "Den_siste_tiden3Page"},
    {title: 'Når døden intreffer',                      component: "Den_siste_tiden4Page"},
    {title: 'Medikamentskrinet / lindring av symptomer',component: "Den_siste_tiden5Page"},
    {title: 'Ernering og væsketilførsel',               component: "Den_siste_tiden6Page"},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get("title")
    let pagesInput = navParams.get("pages")
    if ( pagesInput == "symptomer") {
      this.pages = this.symptomer
      this.title = "Symptomer"
    }
    else if ( pagesInput = "denSisteTiden" ){
      this.pages = this.denSisteTiden
      this.title = "Den siste tiden"
    }
  
  }

  goToPage(component){
    this.navCtrl.push(component)
  }

  backButtonClicked(){
    this.navCtrl.pop()
  }
    
}
