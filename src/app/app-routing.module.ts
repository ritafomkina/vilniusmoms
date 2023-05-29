import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import MainComponent from './desktop-app/components/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
