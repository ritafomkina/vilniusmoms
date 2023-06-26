import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import MainComponent from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'pregnancy',
        loadChildren: () => import('../pregnancy/pregnancy.module').then((m) => m.default),
      },
      {
        path: 'birth',
        loadChildren: () => import('../birth/birth.module').then((m) => m.default),
      },
      {
        path: 'toddler',
        loadChildren: () => import('../toddler/toddler.module').then((m) => m.default),
      },
      {
        path: 'links',
        loadChildren: () => import('../links/links.module').then((m) => m.default),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class DesktopAppRoutingModule { }
