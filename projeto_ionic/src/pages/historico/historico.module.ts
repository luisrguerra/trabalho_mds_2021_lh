import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoPage } from './historico';

import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HistoricoPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoPage),
    TranslateModule.forChild()
  ],
  exports: [
    HistoricoPage
  ]
})
export class HistoricoPageModule {}
