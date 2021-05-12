import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class ItemsHistorico {
  itemsHistorico: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    //"profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
    "codigo": "xxxxxx",
    "horario": "xxxxxx\nzzzzzzz",
    "status": "Pré-Matrícula",
  };


  constructor() {
    let itemsHistorico = [
      {
        "name": "Produção de Queijo",
        "about": "info",
        "codigo": "ENE0027",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Produção de doce de leite",
        "about": "info",
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

  delete(item: Item) {
    this.itemsHistorico.splice(this.itemsHistorico.indexOf(item), 1);
  }
}
