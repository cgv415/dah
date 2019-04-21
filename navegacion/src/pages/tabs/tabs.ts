import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PrincipalPage} from "../principal/principal";
import {Ajustes2Page} from "../ajustes2/ajustes2";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: any;
  tab2: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = PrincipalPage;
    this.tab2 = Ajustes2Page;
  }

  irAjustes() {
    this.navCtrl.parent.select(1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
