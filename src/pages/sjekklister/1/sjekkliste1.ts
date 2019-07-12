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
    { val: 'Sed ei autem aperiam probatus. An ridens suscipit theophrastus nam.', isChecked: false },
    { val: 'Nec no tale comprehensam.', isChecked: false },
    { val: 'Putent feugait prodesset ad est, no qui ullum elaboraret id.', isChecked: false },
    { val: 'Ut latine detracto mei erant.', isChecked: false },
    { val: 'Te per omnium disputationi, sed an quodsi admodum deterruisset vel.', isChecked: false },
    { val: 'Vim ullum explicari laboramus et.', isChecked: false },
    { val: 'Ex vel natum suscipit. Usu vero mucius in, persecuti deseruisse in qui. Sed justo.', isChecked: false },
    { val: 'Sed te erat verear lobortis. Pro id quaeque adolescens voluptaria.', isChecked: false },
    { val: 'Ut latine detracto mei erant.', isChecked: false },
    { val: 'Ex vel natum suscipit. Usu vero mucius in, persecuti deseruisse in qui. Sed justo.', isChecked: false },
    { val: 'Nec no tale comprehensam.', isChecked: false },
    { val: 'Te per omnium disputationi, sed an quodsi admodum deterruisset vel.', isChecked: false },
    { val: 'Sed te erat verear lobortis. Pro id quaeque adolescens voluptaria.', isChecked: false },
    { val: 'Vim ullum explicari laboramus et.', isChecked: false },
    { val: 'Ex vel natum suscipit. Usu vero mucius in, persecuti deseruisse in qui. Sed justo.', isChecked: false },
    { val: 'Te per omnium disputationi, sed an quodsi admodum deterruisset vel.', isChecked: false },
    { val: 'Ut latine detracto mei erant.', isChecked: false },
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
