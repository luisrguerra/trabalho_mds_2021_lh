import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class ItemsOferta {
  itemsOferta: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    //"profilePic": "assets/img/speakers/bear.jpg",
    "codigo": "xxxxxx",
    "horario": "xxxxxx\nzzzzzzz",
    "status": "Pré-Matrícula",
  };


  constructor() {
    let itemsOferta = [
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

    for (let item of itemsOferta) {
      this.itemsOferta.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.itemsOferta;
    }

    return this.itemsOferta.filter((item) => {
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
    this.itemsOferta.push(item);
  }

  delete(item: Item) {
    this.itemsOferta.splice(this.itemsOferta.indexOf(item), 1);
  }
}
