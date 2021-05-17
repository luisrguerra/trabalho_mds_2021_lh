import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ItemsOferta } from '../../providers';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-item-oferta',
  templateUrl: 'item-oferta.html'
})
export class ItemOfertaPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams,public itemsOferta: ItemsOferta,public items: Items) {
    this.item = navParams.get('item') || itemsOferta.defaultItem;
  }


  matricularBotao() {
    this.items.matricular(this.item);
    this.navCtrl.setRoot('SearchPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }
}