import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class ItemsOferta {
  itemsOferta: Item[] = [];

  defaultItem: any = {
    "name": "Nome da disciplina Ofertada",
    //"profilePic": "assets/img/speakers/bear.jpg",
    "codigo": "Código da Disciplina",
    "horario": "Horário da Disciplina",
    "status": "Status da disciplina",
  };


  constructor() {
    let itemsOferta = [
      {
        "name": "Cálculo 3",
        "codigo": "ENE0027",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Física 2 Experimental",
        "codigo": "IFD0177",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Fundamentos de Redes",
        "codigo": "ENE0274",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Projeto Transversal em Redes de Comunicações",
        "codigo": "ENE0022",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Introdução à Economia",
        "codigo": "ECO0019",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
      {
        "name": "Introdução à Atividade Empresarial",
        "codigo": "FTD0007",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "Pré-Matrícula"
      },
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
