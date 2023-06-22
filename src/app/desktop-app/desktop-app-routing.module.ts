import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import MainComponent from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dialog',
        loadChildren: () => import('../dialog/dialog.module').then((m) => m.default),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class DesktopAppRoutingModule { }
