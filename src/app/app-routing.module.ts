import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'dialog',
  //   loadChildren: () => import('./dialog/dialog.module').then((m) => m.default),
  //   outlet: 'dialog',
  // },
  {
    path: '',
    loadChildren: () => import('./desktop-app/desktop-app.module').then((m) => m.default),
    // children: [
    //   {
    //     path: 'dialog',
    //     loadChildren: () => import('./dialog/dialog.module').then((m) => m.default),
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
