import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { ItemsHistorico} from '../../providers';

import { AlertController } from 'ionic-angular';


@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    //"profilePic": "assets/img/speakers/bear.jpg",
    "codigo": "xxxxxx",
    "horario": "xxxxxx\nzzzzzzz",
    "status": "Pré-Matrícula",
  };


  constructor(public itemsHistorico: ItemsHistorico,public alertCtrl: AlertController) {
    let items = [
      /*{
        "name": "Metodologia e Desenvolvimento de Software",
        "codigo": "ENE0276",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Cálculo 1",
        "codigo": "MAT0024",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      } */
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    var item_temp = new Item(item);
    item_temp.status = "Retirado";
    this.itemsHistorico.registrar(item_temp);

    this.items.splice(this.items.indexOf(item), 1);
  }
 
  procurarRegistro(item: Item){
    var achou = this.items.findIndex(i => i.name === item.name);
    if (achou == -1){
         return false;
    }
    else{
      return true;
    }
  }

  matricular(item: Item){
    var encontrou = this.procurarRegistro(item);
    if (encontrou == false){
       
       var item_temp  = new Item(item);
       item_temp.status = "Pré-selecionado";
       this.items.push(item_temp);

       var item_temp2 = new Item(item);
       item_temp2.status = "Pré-selecionado";
       this.itemsHistorico.registrar(item_temp2);

       //this.selecionarPrioridade();
    }
    else{
      this.avisoJaRegistrado();
    }
    
  }
  
  confirmar_item(item: Item){
    if (item.status == "Pré-selecionado"){
      item.status = "Selecionado";
      var item_temp = new Item(item);
      this.itemsHistorico.registrar(item_temp);    
    }
    else if (item.status == "Pré-matriculado"){
      item.status = "Matrícula Solicitada";
      var item_temp = new Item(item);
      this.itemsHistorico.registrar(item_temp);    
    }
  }

  confirmar(){
    for (let item of this.items){
      var posicao = this.items.indexOf(item);
      if (this.items[posicao].status == "Selecionado"){
        this.items[posicao].status = "Pré-matrícula solicitada";

        var item_temp = new Item(this.items[posicao]);
        this.itemsHistorico.registrar(item_temp);
      }
      else if (this.items[posicao].status == "Pré-matrícula solicitada"){
        this.items[posicao].status = "Pré-matriculado";

        var item_temp = new Item(this.items[posicao]);
        this.itemsHistorico.registrar(item_temp);
      }
      else if (this.items[posicao].status == "Matrícula Solicitada"){
        this.items[posicao].status = "Matriculado";

        var item_temp = new Item(this.items[posicao]);
        this.itemsHistorico.registrar(item_temp);
      }
      
    }
  }

  avisoJaRegistrado() {
    const alert = this.alertCtrl.create({
      title: 'Já há uma solicitação',
      subTitle: 'Essa disciplina já está em processo de matrícula ou já foi matriculada.',
      buttons: ['OK']
    });
    alert.present();
  }

  /*async selecionarPrioridade() {
    const alert = await this.alertCtrl.create({
      title: 'Prioridade de matrícula',
      inputs: [
        {
          name: '0',
          type: 'radio',
          label: 'Nenhuma',
          value: '0',
          handler: () => {
          },
          checked: true
        },
        {
          name: '1',
          type: 'radio',
          label: '1',
          value: '1',
          handler: () => {
          }
        },
        {
          name: '2',
          type: 'radio',
          label: '2',
          value: '2',
          handler: () => {
          }
        },
        {
          name: '3',
          type: 'radio',
          label: '3',
          value: '3',
          handler: () => {
          }
        },
        {
          name: '4',
          type: 'radio',
          label: '4',
          value: '4',
          handler: () => {
          }
        },
        {
          name: '5',
          type: 'radio',
          label: '5',
          value: '5',
          handler: () => {
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
         {
          text: 'Ok',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  } */


}
