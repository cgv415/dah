import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Pagina2Page} from "../pagina2/pagina2";
import {TabsPage} from "../tabs/tabs";
import {ModalPage} from "../modal/modal";

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  mostrarModal() {
    let info = {"curso": "ionic"};
    let modal = this.modalCtrl.create( ModalPage, info);

    modal.present();
    modal.onDidDismiss(parametros => {
      console.log(parametros);
    });
  }

  irPagina() {
    this.navCtrl.push(Pagina2Page);
  }

  irTabs() {
    this.navCtrl.push(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

}
