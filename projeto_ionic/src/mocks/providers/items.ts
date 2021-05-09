import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
    "codigo": "xxxxxx",
    "horario": "xxxxxx\nzzzzzzz",
    "status": "Pré-Matrícula",
  };


  constructor() {
    let items = [
      {
        "name": "Cálculo 3",
        "about": "info",
        "codigo": "ENE0027",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Física 2 Experimental",
        "about": "info",
        "codigo": "IFD0177",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Fundamentos de Redes",
        "about": "info",
        "codigo": "ENE0274",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Projeto Transversal em Redes de Comunicações",
        "about": "info",
        "codigo": "ENE0022",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Introdução à Economia",
        "about": "info",
        "codigo": "ECO0019",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Introdução à Atividade Empresarial",
        "about": "info",
        "codigo": "FTD0007",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Metodologia e Desenvolvimento de Software",
        "about": "info",
        "codigo": "ENE0276",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Cálculo 1",
        "about": "info",
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
