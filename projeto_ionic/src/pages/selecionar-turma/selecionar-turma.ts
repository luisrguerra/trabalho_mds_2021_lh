import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Item } from '../../models/item';
import { Items } from '../../providers';
import { ItemsOferta } from '../../providers';

/**
 * Generated class for the SelecionarTurmaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selecionar-turma',
  templateUrl: 'selecionar-turma.html',
})
export class SelecionarTurmaPage {
  
  disciplina: any;
  turmasLista: Item[];
  constructor(public navCtrl: NavController,public itemsOferta: ItemsOferta, public navParams: NavParams,public items: Items) {
    //Receber variavel vinda de outra página
    this.disciplina = navParams.get('disciplinaSelecionada') || items.defaultItem;
    var disciplinaNome = this.disciplina.name;
    var arrayItemsOferta = this.itemsOferta.query();
    
    //Buscar disciplina pelo nome
    var enderecoDisciplina = arrayItemsOferta.findIndex(i => i.name === disciplinaNome);
    this.disciplina = arrayItemsOferta[enderecoDisciplina];
    //Separar lista de turmas
    this.turmasLista = this.disciplina.turma;
    

  }

  ionViewDidLoad() {

  }

  matricularTurma(turmasLista) {
    //Criação de novo objeto para evitar alterações trocadas 
    var disciplinaMatricular = new Item(this.disciplina);
    
    //Registro de informações da turma selecionada
    disciplinaMatricular.codigoTurmaMatriculada= turmasLista.codigoTurma;
    disciplinaMatricular.horarioTurmaMatriculada= turmasLista.horario;
    disciplinaMatricular.professorTurmaMatriculada= turmasLista.professor;
    disciplinaMatricular.localTurmaMatriculada= turmasLista.local;
    
    var jaExiste = this.items.procurarRegistro(disciplinaMatricular);
    //Salvamento da matrícula
    this.items.matricular(disciplinaMatricular);
    
    //Voltar a pagina de busca
    
    if (jaExiste == false){
      this.navCtrl.setRoot('PrioridadePage', {}, {
        animate: true,
        direction: 'forward'
      });
    }else{
      this.navCtrl.setRoot('SearchPage', {}, {
        animate: true,
        direction: 'forward'
      });
    }
    
    
  }

}
