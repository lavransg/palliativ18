import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sjekkliste1',
  templateUrl: 'sjekkliste1.html'
})
export class Sjekkliste1Page {

  title: string = "Før pasienten kommer hjem"

  public checklist = [
    { val: 'Samarbeidsmøte på sykehuset med pasient / pårørende, fastlege og sykehusavdeling', isChecked: false },
    { val: 'Avklare: diagnose, hjelpebehov, pleiepenger, hjelpemidler - OBS: fysioterapi, forventninger, tidspunkt for hjemreise, åpen retur? kontakt med spesialisthelsetjenesten', isChecked: false },
    { val: 'Sikre at fastlegen informeres - er informert om hjemreise', isChecked: false },
    { val: 'Avklare tilgjengelighet utenom kontortid med fastlege', isChecked: false },
    { val: 'Vurdere / utarbeide "individuell plan til bruk i palliasjon"', isChecked: false },
    { val: 'Nødvendige medisiner for de første døgnene sendes med pasienten', isChecked: false },
    { val: 'E-resepter sendes fra sykehus og/eller fastlege', isChecked: false },
    { val: 'Sjekke at nødvendige medisiner er tilgjengelig på apotek, evt. bestille disse', isChecked: false },
    { val: 'Dokumentere i elektronisk pasientjournal', isChecked: false }
  ];

  constructor(public navCtrl: NavController,public navParams: NavParams) {}
  
  @ViewChild(Content) content: Content;

  ionViewDidEnter(){ 
    let id = this.navParams.get('id')
    if (id && id != -1){
      this.scrollTo("innhold-"+id)
    }
  }

  clearCheckboxes(){
    for (let item in this.checklist) {
      this.checklist[item].isChecked = false;
    }
  }

  scrollTo(element:string) {
    let elem = document.getElementById(element);
    if (elem){
      var box = elem.getBoundingClientRect();
      var body = document.body;
      var docEl = document.documentElement;
      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      var clientTop = docEl.clientTop || body.clientTop || 0;
      var top  = box.top +  scrollTop - clientTop;
      var cDim = this.content.getContentDimensions();
      var scrollOffset = Math.round(top) + cDim.scrollTop - cDim.contentTop;
      this.content.scrollTo(0, scrollOffset-35, 500);
    }
  }

}
