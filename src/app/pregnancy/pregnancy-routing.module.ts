import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import BenefitsComponent from './components/benefits/benefits.component';
import EmploymentComponent from './components/employment/employment.component';
import HospitalsComponent from './components/hospitals/hospitals.component';
import PriceComponent from './components/price/price.component';
import RegistrationBELComponent from './components/registration-bel/registration-bel.component';
import RegistrationUAComponent from './components/registration-ua/registration-ua.component';
import VeiklaComponent from './components/veikla/veikla.component';

const routes: Routes = [
  {
    path: 'registration',
    children: [
      {
        path: 'UA',
        component: RegistrationUAComponent,
      },
      {
        path: 'BEL',
        component: RegistrationBELComponent,
      },
      {
        path: 'RU',
        component: RegistrationBELComponent,
      },
    ],
  },
  {
    path: 'hospitals', component: HospitalsComponent,
  },
  {
    path: 'price', component: PriceComponent,
  },
  {
    path: 'insurance',
    children: [
      {
        path: 'employment',
        component: EmploymentComponent,
      },
      {
        path: 'veikla',
        component: VeiklaComponent,
      },
    ],
  },
  {
    path: 'benefits', component: BenefitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class PregnancyRoutingModule { }
