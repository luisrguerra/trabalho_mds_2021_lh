import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

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


  constructor() {
    let items = [
      {
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
      }
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
    this.items.splice(this.items.indexOf(item), 1);
  }
}
