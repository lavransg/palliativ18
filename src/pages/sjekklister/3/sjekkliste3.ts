import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sjekkliste3',
  templateUrl: 'sjekkliste3.html'
})
export class Sjekkliste3Page {

  title: string = "Når pasienten er død"

  public checklist = [
    { val: 'Fastlege skriver dødsattest - i hjemmet', isChecked: false },
    { val: 'Brosjyre: "Til deg som har mistet en av dine nærmeste" (KLB), "Når en av dine nærmeste dør" (H.Dir)', isChecked: false },
    { val: 'Personalets refleksjon og evaluering av prosessen', isChecked: false }
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
