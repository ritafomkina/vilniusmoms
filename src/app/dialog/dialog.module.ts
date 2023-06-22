import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { RouterModule } from '@angular/router';
import DialogRoutingModule from './dialog-routing.module';
import SharedModule from '../shared/shared.module';
import DialogTemplateComponent from './components/dialog-template/dialog-template.component';
import ChooseCountryDialogComponent from './components/choose-country-dialog/choose-country-dialog.component';
import ChooseInsuranseComponent from './components/choose-insurance/choose-insurance.component';

@NgModule({
  declarations: [
    DialogTemplateComponent,
    ChooseCountryDialogComponent,
    ChooseInsuranseComponent,
  ],
  imports: [
    CommonModule,
    DialogRoutingModule,
    SharedModule,
    // RouterModule,
  ],
})
export default class DialogModule { }
