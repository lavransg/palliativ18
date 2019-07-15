import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sjekkliste2',
  templateUrl: 'sjekkliste2.html'
})
export class Sjekkliste2Page {

  title: string = "Når pasienten er kommet hjem"

  public checklist = [
    { val: 'Kontinuerlig oppfølging av aktuelle oppgaver fra før pasienten kommer hjem. Informer pårørende om rett til pleiepenger!', isChecked: false },
    { val: 'Pasienten og pårørende får hilse på sin primærkontakt', isChecked: false },
    { val: 'Ansvarlige sykepleiere på kveld / helg / hellidag gjør seg kjent hjemme hos pasienten', isChecked: false },
    { val: 'Sikre oversikt over medisiner, resepter, og utstyr. Bestill nye dersom behov', isChecked: false },
    { val: 'Dokumentere i elektronisk pasientjournal (EPJ)', isChecked: false }  
  ];

  public checklist2 = [
    { val: 'Kontakt fastlegen for avtale om mulig hjemmebesøk', isChecked: false },
    { val: 'Oppdater pasientens medisinoversikt ved behov', isChecked: false },
    { val: 'Følg opp pårørende. Vurder behov for avlasting / "time-out"?', isChecked: false },
    { val: 'Vurder avlasting for pårørende på natt', isChecked: false },
    { val: 'Hyppig kontakt med fastlege - avklare rolle ved dødsfall', isChecked: false }
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
    for (let item in this.checklist2) {
      this.checklist2[item].isChecked = false;
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
