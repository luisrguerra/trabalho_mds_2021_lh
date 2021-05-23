import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ItemsOferta } from '../../providers';
import { Items } from '../../providers';
//import { Item } from '../../models/item';

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

 
  matricularBotao(disciplinaSelecionada: any) {
    
    //Ir para a página de seleção de turma
    this.navCtrl.push('SelecionarTurmaPage', {
       
      //Envio de variavel para a próxima página
       disciplinaSelecionada: disciplinaSelecionada
    });
  }
}