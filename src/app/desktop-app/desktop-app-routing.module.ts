import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'dialog', loadChildren: () => import('../dialog/dialog.module').then((m) => m.default),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class DesktopAppRoutingModule { }
