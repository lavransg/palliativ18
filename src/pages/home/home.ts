import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = "Palliasjon"

  showBtn: boolean = false;
  deferredPrompt;

  constructor(public navCtrl: NavController) {}

  ionViewWillEnter(){
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later on the button event.
      this.deferredPrompt = e;
       
    // Update UI by showing a button to notify the user they can add to home screen
      this.showBtn = true;
    });
     
    //button click event to show the promt
             
    window.addEventListener('appinstalled', (event) => {
     alert('installed');
    });
     
     
    if (window.matchMedia('(display-mode: standalone)').matches) {
      alert('display-mode is standalone');
    }
  }

  menuButtonClicked(button){
    let page;
    switch(button){
      case 1: this.navCtrl.push("ListPage", { pages: "sjekklister" });
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

  add_to_home(e){
    // hide our user interface that shows our button
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          alert('User accepted the prompt');
        } else {
          alert('User dismissed the prompt');
        }
        this.deferredPrompt = null;
      });
  };

}
