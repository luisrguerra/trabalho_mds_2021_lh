import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class ItemsHistorico {
  itemsHistorico: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    //"profilePic": "assets/img/speakers/bear.jpg",
    "codigo": "xxxxxx",
    "horario": "xxxxxx\nzzzzzzz",
    "status": "Pré-Matrícula",
  };


  constructor() {
    let itemsHistorico = [
      {
        "name": "Produção de Queijo",
        "codigo": "ENE0027",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Produção de doce de leite",
        "codigo": "MAT0024",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      }
    ];

    for (let item of itemsHistorico) {
      this.itemsHistorico.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.itemsHistorico;
    }

    return this.itemsHistorico.filter((item) => {
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
    this.itemsHistorico.push(item);
  }

  registrar(item: Item) {
    var item_temp = Object.create(item);
    var data = new Date();

    var ano = data.getFullYear();
    var mes = data.getMonth();
    var dia = data.getDay();
    var minutos = data.getMinutes();
    var horas = data.getHours();

    item_temp.data = " " + minutos + ":" + horas + " - " + dia + "/" + mes + "/" + ano;
    this.itemsHistorico.push(item_temp);
  }

  delete(item: Item) {
    this.itemsHistorico.splice(this.itemsHistorico.indexOf(item), 1);
  }
}
