import { Component } from '@angular/core';
import { IonicPage, Nav, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  constructor(public nav: Nav,public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  //Ao carregar a página
  ionViewDidLoad() {
    

  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */

   //Ao entrar na página
   ionViewWillEnter(){
    //aviso de lista de matrícula vazia 
    var vazio = this.currentItems.length;
    if (vazio == 0){
      //Mostra aviso de lista de matrícula vazia
      document.getElementById("avisoVazio").style.display = "inherit";
    }
    else{
      //Esconde aviso de lista de matrícula vazia
      document.getElementById("avisoVazio").style.display = "none";
    }

  }

  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

  sairApp() {
    this.nav.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  confirmarListaBotao() {
    this.items.confirmar();
  }

  abrirPerfil() {
    this.navCtrl.push("UsuarioPage");
  }
  
}
