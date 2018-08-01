import { Component, ViewChild } from '@angular/core';
import { Content, IonicPage } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-symptomer4',
  templateUrl: 'symptomer4.html'
})
export class Symptomer4Page {

  title: string = "Delir"

  constructor(public navCtrl: NavController,public navParams: NavParams) {
  }

  
  @ViewChild(Content) content: Content;

  ionViewDidEnter(){ 
    let id = this.navParams.get('id')
    if (id && id != -1){
      this.scrollTo("symptomer-4-"+id)
    }
  }

  goToPage(page,id){
    this.navCtrl.push(page, {id: id})
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
