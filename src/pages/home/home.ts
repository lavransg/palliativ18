import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = "Palliasjon"

  constructor(public navCtrl: NavController) {}

  menuButtonClicked(button){
    let page;
    switch(button){
      case 1: page = "Innhold_bakgrunnPage"
        break;
      case 2: this.navCtrl.push("ListPage", { pages: "symptomer" });
        break;
      case 3: page = "Akutte_tilstanderPage"
        break;
      case 4: page = "KommunikasjonPage"
        break;
      case 5: page = "Aandelig_omsorgPage"
        break;
      case 6: this.navCtrl.push("ListPage", { pages: "denSisteTiden" });
        break;
      case 7: page = "ProsedyrerPage"
        break;
      case 8: page = "KartleggingPage"
        break;
    }
    if (page){
      this.navCtrl.push(page);
    }
  }

}
