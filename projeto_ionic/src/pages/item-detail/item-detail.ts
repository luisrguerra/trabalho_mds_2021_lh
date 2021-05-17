import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams,public items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }


  retirarBotao() {
    this.items.delete(this.item);
    this.navCtrl.setRoot('ListMasterPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  confirmarBotao() {
    this.items.confirmar_item(this.item);


    this.navCtrl.setRoot('ListMasterPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }
}
