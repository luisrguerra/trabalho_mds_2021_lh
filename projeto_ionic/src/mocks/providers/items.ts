import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
    "status": "Pré-Matrícula",
  };


  constructor() {
    let items = [
      {
        "name": "Cálculo 3",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "ENE0027",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Física 2 Experimental",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "IFD0177",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Fundamentos de Redes",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "ENE0274",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Projeto Transversal em Redes de Comunicações",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "ENE0022",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Introdução à Economia",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "ECO0019",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Introdução à Atividade Empresarial",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "FTD0007",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Metodologia e Desenvolvimento de Software",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "ENE0276",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Cálculo 1",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "MAT0024",
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
