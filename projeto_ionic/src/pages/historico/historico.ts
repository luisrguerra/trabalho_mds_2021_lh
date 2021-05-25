import { Component } from '@angular/core';
import { IonicPage,Nav, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { ItemsHistorico } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {
  currentItems: Item[];

  constructor(public nav: Nav, public navCtrl: NavController, public itemsHistorico: ItemsHistorico, public modalCtrl: ModalController) {
    this.currentItems = this.itemsHistorico.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  //Ao entrar na página
  ionViewWillEnter(){
    //aviso de lista de matrícula vazia 
    var vazio = this.currentItems.length;
    if (vazio == 0){
      //Mostra aviso de lista de matrícula vazia
      document.getElementById("avisoVazioHistorico").style.display = "inherit";
    }
    else{
      //Esconde aviso de lista de matrícula vazia
      document.getElementById("avisoVazioHistorico").style.display = "none";
    }

  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  /*addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.itemsHistorico.add(item);
      }
    })
    addModal.present();
  }  */

  /**
   * Delete an item from the list of items.
   */
  
  /*deleteItem(item) {
    this.itemsHistorico.delete(item);
  }*/

  /**
   * Navigate to the detail page for this item.
   */
  /*openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  } */

  sairApp() {
    this.nav.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  abrirPerfil() {
    this.navCtrl.push("UsuarioPage");
  }

  
}
