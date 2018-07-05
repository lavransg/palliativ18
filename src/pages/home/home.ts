import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListPage } from '../list/list';


import {Symptomer1Page} from '../symptomer/1/symptomer1';
import {Symptomer2Page} from '../symptomer/2/symptomer2';
import {Symptomer3Page} from '../symptomer/3/symptomer3';
import {Symptomer4Page} from '../symptomer/4/symptomer4';
import {Symptomer5Page} from '../symptomer/5/symptomer5';
import {Symptomer6Page} from '../symptomer/6/symptomer6';
import {Symptomer7Page} from '../symptomer/7/symptomer7';
import {Symptomer8Page} from '../symptomer/8/symptomer8';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = "Palliasjon"

  constructor(public navCtrl: NavController) {

  }

  symptomerButtonClicked() {
    this.navCtrl.push(ListPage, {
      title: "Symptomer",
      pages: [
        {title: "Smerte",     component: Symptomer1Page},
        {title: "Kvalme",     component: Symptomer2Page},
        {title: "Angst/uro",  component: Symptomer3Page},
        {title: "Delir",      component: Symptomer4Page},
        {title: "Munntørr",   component: Symptomer5Page},
        {title: "Obstipasjon",component: Symptomer6Page},
        {title: "Matlyst",    component: Symptomer7Page},
        {title: "Tungpust",   component: Symptomer8Page},
      ]
    });
  }

  denSisteTidenButtonClicked() {
    this.navCtrl.push(ListPage, {
      items: [
        //sidene for "den siste tiden"
      ]
    });
  }

}
