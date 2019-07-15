import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Checklists } from '../../../providers/checklists';

@IonicPage()
@Component({
  selector: 'page-sjekkliste3',
  templateUrl: 'sjekkliste3.html'
})
export class Sjekkliste3Page {

  title: string = "Når pasienten er død"

  constructor(public navCtrl: NavController,public navParams: NavParams, public checklists: Checklists) {}
  
  @ViewChild(Content) content: Content;

  ionViewDidEnter(){ 
    let id = this.navParams.get('id')
    if (id && id != -1){
      this.scrollTo("innhold-"+id)
    }
  }

  clearCheckboxes(){
    for (let item in this.checklists.checklist4) {
      this.checklists.checklist4[item].isChecked = false;
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
