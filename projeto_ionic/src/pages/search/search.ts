import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { ItemsOferta } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemsOferta: ItemsOferta) { }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = this.itemsOferta.query();
      return;
    }
    this.currentItems = this.itemsOferta.query({
      name: val,
      codigo: val
    });
  }

  //mostrar todos os itens na pesquisa
  ionViewDidLoad() {
    this.currentItems = this.itemsOferta.query();
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemOfertaPage', {
      item: item
    });
  }

}
