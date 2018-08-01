import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Content, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-prosedyrer',
  templateUrl: 'prosedyrer.html'
})
export class ProsedyrerPage {

  title: string = "Prosedyrer"
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidEnter(){ 
    let id = this.navParams.get('id')
    if (id && id != -1){
      this.scrollTo("prosedyrer-"+id)
    }
  }

  goToPage(page,id){
    this.navCtrl.push(page, {id: id})
  }

  scrollTo(element:string) {
    let elem = document.getElementById(element);
    if (elem){
      let box = elem.getBoundingClientRect();
      let body = document.body;
      let docEl = document.documentElement;
      let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      let clientTop = docEl.clientTop || body.clientTop || 0;
      let top  = box.top +  scrollTop - clientTop;
      let cDim = this.content.getContentDimensions();
      let scrollOffset = Math.round(top) + cDim.scrollTop - cDim.contentTop;
      this.content.scrollTo(0, scrollOffset-35, 500);
    }
  }

}
