import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import ClinicComponent from './components/clinic/clinic.component';
import DocumentsUAComponent from './components/documents-ua/documents-ua.component';
import DocumentsBELComponent from './components/documents-bel/documents-bel.component';
import DocumentsRUComponent from './components/documents-ru/documents-ru.component';
import MamashealthComponent from './components/mamashealth/mamashealth.component';
import DadsBenefitsComponent from './components/dads-benefits/dads-benefits.component';

const routes: Routes = [
  {
    path: 'clinic', component: ClinicComponent,
  },
  {
    path: 'documents',
    children: [
      {
        path: 'UA', component: DocumentsUAComponent,
      },
      {
        path: 'BEL', component: DocumentsBELComponent,
      },
      {
        path: 'RU', component: DocumentsRUComponent,
      },
    ],
  },
  {
    path: 'health', component: MamashealthComponent,
  },
  {
    path: 'dads-benefits', component: DadsBenefitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class BirthRoutingModule { }
