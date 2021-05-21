import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { ItemsHistorico} from '../../providers';

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


  constructor(public itemsHistorico: ItemsHistorico) {
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

  matricular(item: Item){
    console.log("Matricular:",item);
    var achou = this.items.indexOf(item);
    console.log("Achou:",achou);
    if (achou == -1){
       
       var item_temp  = new Item(item);
       item_temp.status = "Pré-selecionado";
       this.items.push(item_temp);

       var item_temp2 = new Item(item);
       item_temp2.status = "Pré-selecionado";
       this.itemsHistorico.registrar(item_temp2);
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
}
