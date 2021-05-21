import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();
    translate.get(["TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: "Bem-vindo ao SIGAA",
            description: "Neste tutorial você aprederá a usar a plataforma.",
            image: '../assets/img/unb-logo.svg',
          },
          {
            title: "Tela de matrícula",
            description: "Aqui é mostrado as disciplinas em processo de matrícula ou já matriculadas.",
            image: 'assets/img/tutorial/tutorial1.png',
          },
          {
            title: "Disciplinas selecionadas",
            description: "Ao selecionar um item da tela de matrícula, você visualizará informações sobre as suas solicitações e poderá confirma ou cancelar a sua matrícula.",
            image: 'assets/img/tutorial/tutorial5.png',
          },
          {
            title: "Tela de lista de oferta",
            description: "Na lista de oferta você encontrará as disciplinas disponíveis para matrícula.",
            image: 'assets/img/tutorial/tutorial2.png',
          },
          {
            title: "Disciplina ofertada",
            description: "Ao selecionar uma disciplina na lista de oferta, você visualizará informações sobre ela e poderá se matricular.",
            image: 'assets/img/tutorial/tutorial4.png',
          },
          {
            title: "Tela de histórico de matrícula",
            description: "No histórico você visualizará as etapas dos seu processo de matrícula junto da data e hora de cada solicitação.",
            image: 'assets/img/tutorial/tutorial3.png',
          }
        ];
      });
  }

  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
