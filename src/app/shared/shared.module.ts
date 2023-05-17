import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const materialComponents = [
  MatButtonModule, MatDialogModule,
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [...materialComponents],
})
export default class SharedModule { }
