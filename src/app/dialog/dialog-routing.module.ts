import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ChooseCountryDialogComponent from './components/choose-country-dialog/choose-country-dialog.component';
import ChooseInsuranseComponent from './components/choose-insurance/choose-insurance.component';
import DialogTemplateComponent from './components/dialog-template/dialog-template.component';

const routes: Routes = [
  { path: '', component: DialogTemplateComponent },
  { path: 'choose-country', component: ChooseCountryDialogComponent },
  { path: 'choose-insurance', component: ChooseInsuranseComponent },
  {
    path: 'pregnancy', loadChildren: () => import('../pregnancy/pregnancy.module').then((m) => m.default),
  },
  {
    path: 'birth', loadChildren: () => import('../birth/birth.module').then((m) => m.default),
  },
  {
    path: 'toddler', loadChildren: () => import('../toddler/toddler.module').then((m) => m.default),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class DialogRoutingModule { }
