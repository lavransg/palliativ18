import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

/* import { ListPage } from '../list/list'; */

/* import {Symptomer1Page} from '../symptomer/1/symptomer1';
import {Symptomer2Page} from '../symptomer/2/symptomer2';
import {Symptomer3Page} from '../symptomer/3/symptomer3';
import {Symptomer4Page} from '../symptomer/4/symptomer4';
import {Symptomer5Page} from '../symptomer/5/symptomer5';
import {Symptomer6Page} from '../symptomer/6/symptomer6';
import {Symptomer7Page} from '../symptomer/7/symptomer7';
import {Symptomer8Page} from '../symptomer/8/symptomer8';

import { Den_siste_tiden1Page } from '../den_siste_tiden/1/den_siste_tiden1';
import { Den_siste_tiden2Page } from '../den_siste_tiden/2/den_siste_tiden2';
import { Den_siste_tiden3Page } from '../den_siste_tiden/3/den_siste_tiden3';
import { Den_siste_tiden4Page } from '../den_siste_tiden/4/den_siste_tiden4';
import { Den_siste_tiden5Page } from '../den_siste_tiden/5/den_siste_tiden5';
import { Den_siste_tiden6Page } from '../den_siste_tiden/6/den_siste_tiden6'; */

/* import { Akutte_tilstanderPage } from '../akutte_tilstander/akutte_tilstander';
import { Innhold_bakgrunnPage } from '../innhold_bakgrunn/innhold_bakgrunn';
import { KartleggingPage } from '../kartlegging/kartlegging';
import { KommunikasjonPage } from '../kommunikasjon/kommunikasjon';
import { ProsedyrerPage } from '../prosedyrer/prosedyrer';
import { Aandelig_omsorgPage } from '../aandelig_omsorg/aandelig_omsorg'; */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = "Palliasjon"
  buttonColor: string = 'transparent';
  showBtn: boolean = false;
  deferredPrompt;

/*   symptomer: any[] = [
    {title: "Smerte",     component: Symptomer1Page},
    {title: "Kvalme",     component: Symptomer2Page},
    {title: "Angst/uro",  component: Symptomer3Page},
    {title: "Delir",      component: Symptomer4Page},
    {title: "Munntørr",   component: Symptomer5Page},
    {title: "Obstipasjon",component: Symptomer6Page},
    {title: "Matlyst",    component: Symptomer7Page},
    {title: "Tungpust",   component: Symptomer8Page},
  ]
  denSisteTiden: any[] = [
    {title: 'Tegn på at X er døende',                   component: Den_siste_tiden1Page},
    {title: 'Det gode stellet',                         component: Den_siste_tiden2Page},
    {title: 'Ikke-medikamentell behandling',            component: Den_siste_tiden3Page},
    {title: 'Når døden intreffer',                      component: Den_siste_tiden4Page},
    {title: 'Medikamentskrinet / lindring av symptomer',component: Den_siste_tiden5Page},
    {title: 'Ernering og væsketilførsel',               component: Den_siste_tiden6Page},
  ] */

  constructor(public navCtrl: NavController) {

  }

  /*
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
  */

  menuButtonClicked(button){
    this.buttonColor = '#345465';
    let page;
    switch(button){
      case 2:
        this.navCtrl.push("ListPage", {
          pages: "symptomer"
        });
        break;
      case 6:
        this.navCtrl.push("ListPage", {
          pages: "denSisteTiden"
        });
        break;
      case 1: page = "Innhold_bakgrunnPage"
        break;
      case 3: page = "Akutte_tilstanderPage"
        break;
      case 4: page = "KommunikasjonPage"
        break;
      case 5: page = "Aandelig_omsorgPage"
        break; 
      case 7: page = "ProsedyrerPage"
        break;
      case 8: page = "KartleggingPage"
        break;
      case 9: // foreløpig tom
        break;
    }
    if (page){
      this.navCtrl.push(page);
    }
  }

  /*
  addToHome(event){
    //debugger
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
  }*/


}
