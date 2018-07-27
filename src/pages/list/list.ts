import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

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
    {title: 'Ernæring og væsketilførsel',               component: "Den_siste_tiden3Page"},
    {title: 'Ikke-medikamentell behandling',            component: "Den_siste_tiden4Page"},
    {title: 'Medikamentskrinet / lindring av symptomer',component: "Den_siste_tiden5Page"},
    {title: 'Når døden intreffer',                      component: "Den_siste_tiden6Page"},
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
