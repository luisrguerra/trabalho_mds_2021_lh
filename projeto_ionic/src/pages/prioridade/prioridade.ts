import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrioridadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prioridade',
  templateUrl: 'prioridade.html',
})
export class PrioridadePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrioridadePage');
  }

  prosseguirBotao() {

    this.navCtrl.setRoot('AvisoMatriculaPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
