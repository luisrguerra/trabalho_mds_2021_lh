import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class ItemsOferta {
  itemsOferta: Item[] = [];

  defaultItem: any = {
    "name": "Nome da disciplina Ofertada",
    //"profilePic": "assets/img/speakers/bear.jpg",
    "codigo": "Código da Disciplina",
    "status": "Status da disciplina",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "preRequisito": "Nenhum",
    "turma":[
      {
       "codigoTurma": "C",
       "professor": "Mario",
       "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
       "local": "ANF11",
      },
      {
       "codigoTurma": "D",
       "professor": "Mario",
       "horario": "TER: 10:00 às 11:50\nQUI: 10:00 às 11:50",
       "local": "ANF11",
      },
     ],
  };


  constructor() {
    let itemsOferta = [
      {
        "name": "Cálculo 3",
        "codigo": "ENE0027",
        "status": "",
        "descricao": "Vetores no plano e no espaço; funções de várias variáveis; fórmula de Taylor e aplicações; transformações diferenciáveis; o teorema da função inversa e da função Implícita.",
        "preRequisito": "Cálculo 2",
        "turma":[
         {
          "codigoTurma": "A",
          "professor": "Mario",
          "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
          "local": "ANF11",
         },
         {
          "codigoTurma": "B",
          "professor": "Mario",
          "horario": "TER: 10:00 às 11:50\nQUI: 10:00 às 11:50",
          "local": "ANF11",
         },
        ]
      },
      {
        "name": "Física 2 Experimental",
        "codigo": "IFD0177",
        "status": "",
        "descricao": "GIROSCOPIO. MOVIMENTO PERIODICO. HIDROSTATICA. ONDAS SONORAS. DILATACAO LINEAR. CALOR ESPECIFICO. DOS SOLIDOS. CONDUCAO DE CALOR. COMPORTAMENTO DO GASES.",
        "preRequisito": "Física 1, Física 1 experimental e Cálculo 1",
        "turma":[
          {
           "codigoTurma": "X",
           "professor": "Camila",
           "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
           "local": "ANF11",
          },
          {
           "codigoTurma": "Y",
           "professor": "Camila",
           "horario": "TER: 10:00 às 11:50\nQUI: 10:00 às 11:50",
           "local": "ANF11",
          },
         ],
      },
      {
        "name": "Fundamentos de Redes",
        "codigo": "ENE0274",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "",
        "descricao": "Princípios de Telecomunicações; Introdução às Redes de Comunicação e à Internet; Pilhas de Protocolos e seus modelos de serviços; Camada de Aplicação; Camada de Transporte; Camada de Rede; Camada de Enlace.",
        "preRequisito": "Probabilidade e Estatística e Algoritmos e Estrutura Dados",
        "turma":[
          {
           "codigoTurma": "M",
           "professor": "Alexandre",
           "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
           "local": "ANF11",
          },
          {
           "codigoTurma": "N",
           "professor": "Alexandre",
           "horario": "TER: 10:00 às 11:50\nQUI: 10:00 às 11:50",
           "local": "ANF11",
          },
         ],
      },
      {
        "name": "Projeto Transversal em Redes de Comunicações",
        "codigo": "ENE0022",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "",
        "descricao": "Introduzir o estudante à metodologia de projeto como atividade síntese da profissão de engenheiro; integrar os conhecimentos e as habilidades técnicas adquiridas ao longo dos cursos de graduação na solução de problemas, por meio do desenvolvimento de um tema real de projeto; apresentar os fundamentos metodológicos, científicos e tecnológicos, envolvidos no processo de projeto e de solução de problemas; desenvolver a habilidade de identificação, formulação e solução de problemas; desenvolver habilidades de trabalho em grupo, promover a compreensão das responsabilidades sociais, culturais e ambientais do engenheiro e a necessidade do desenvolvimento sustentável.",
        "preRequisito": "Computacao para engenharia e Algoritmos e estrutura dados ou Computacao para engenharia e Sistemas de programacao",
        "turma":[
          {
           "codigoTurma": "F",
           "professor": "Maria",
           "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
           "local": "ANF11",
          },
          {
           "codigoTurma": "G",
           "professor": "Maria",
           "horario": "TER: 10:00 às 11:50\nQUI: 10:00 às 11:50",
           "local": "ANF11",
          },
         ],
      },
      {
        "name": "Introdução à Economia",
        "codigo": "ECO0019",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "",
        "descricao": "Curso discute, em caráter introdutório, questões metodológicas da ciência econômica, abordando, em seguintes temas: noções de microeconomia, estruturas de mercado, a demanda e a oferta; noções de macroeconomia, os agregados macroeconômicos, os modelos macroeconômicos simplificados; noções de economia monetária, as diferentes interpretações da inflação e políticas de estabilização; as relações econômicas internacionais, taxa de cambio, balanço de pagamento, relações econômicas do Brasil com o resto do mundo e principais problemas.",
        "preRequisito": "Nenhum",
        "turma":[
          {
           "codigoTurma": "U",
           "professor": "Augusto",
           "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
           "local": "ANF11",
          },
          {
           "codigoTurma": "I",
           "professor": "Augusto",
           "horario": "TER: 10:00 às 11:50\nQUI: 10:00 às 11:50",
           "local": "ANF11",
          },
         ],
      },
      {
        "name": "Introdução à Atividade Empresarial",
        "codigo": "FTD0007",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "",
        "descricao": "Introdução à Atividade Empresarial tem como objetivo desenvolver competências básicas e emergentes na área de inovação tecnológica, do empreendedorismo e promover o autodesenvolvimento de futuros empreendedores.",
        "preRequisito": "Nenhum",
        "turma":[
          {
           "codigoTurma": "L",
           "professor": "João",
           "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
           "local": "ANF11",
          },
          {
           "codigoTurma": "Q",
           "professor": "João",
           "horario": "TER: 10:00 às 11:50\nQUI: 10:00 às 11:50",
           "local": "ANF11",
          },
         ],
      },
      {
        "name": "Metodologia e Desenvolvimento de Software",
        "codigo": "ENE0276",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "",
        "descricao": "Objetivos, conceitos e evolução da Engenharia de Software. Paradigmas de desenvolvimento de software. Práticas no gerenciamento de projetos. Evolução das metodologias de sistemas e suas principais técnicas. Processo de desenvolvimento de software. Modelos de software. Ciclo de vida no Desenvolvimento de Sistemas. Melhores práticas no desenvolvimento de software. Qualidade de processo, software e seus modelos.",
        "preRequisito": "Sistemas de programacao ou Algoritmos e estrutura dados",
        "turma":[
          {
           "codigoTurma": "O",
           "professor": "Fábio",
           "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
           "local": "ANF11",
          },
          {
           "codigoTurma": "I",
           "professor": "Fábio",
           "horario": "TER: 10:00 às 11:50\nQUI: 10:00 às 11:50",
           "local": "ANF11",
          },
         ],
      },
      {
        "name": "Cálculo 1",
        "codigo": "MAT0024",
        "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
        "status": "",
        "descricao": "Funções de uma variável real, limite e continuidade, derivada, integral, aplicações da integral.",
        "preRequisito": "Nenhum",
        "turma":[
          {
           "codigoTurma": "A",
           "professor": "Roberta",
           "horario": "SEG: 10:00 às 11:50\nQUA: 10:00 às 11:50",
           "local": "ANF11",
          },
          {
           "codigoTurma": "U",
           "professor": "Roberta",
           "horario": "TER: 10:00 às 11:50\nQUI: 10:00 às 11:50",
           "local": "ANF11",
          },
         ],
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
