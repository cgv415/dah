import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Pagina3Page} from "../pagina3/pagina3";
import {PrincipalPage} from "../principal/principal";

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  peliculas: any[] = [
    {"titulo": "Encadenados", "director": "Alfred Hitchcock"},
    {"titulo": "Casino", "director": "Martin Scorsesse"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  mostrarDetalles(pelicula) {
    this.navCtrl.push(Pagina3Page, {'pelicula': pelicula});
  }

  buttonClick(){
    this.navCtrl.push(PrincipalPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

}
