import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Popup from 'src/app/services/popup.service';
import EmploymentComponent from '../employment/employment.component';
import VeiklaComponent from '../veikla/veikla.component';

@Component({
  selector: 'app-choose-insurance',
  templateUrl: './choose-insurance.component.html',
  styleUrls: ['./choose-insurance.component.scss'],
})
export default class ChooseInsuranseComponent {
  constructor(
    public dialog: MatDialog,
    private popup: Popup,

  ) {}

  openDialog(insurance: string) {
    if (insurance === 'Veikla') {
      this.popup.currentPopup = this.dialog.open(VeiklaComponent);
    } else if (insurance === 'Employment') {
      this.popup.currentPopup = this.dialog.open(EmploymentComponent);
    }
    this.popup.isOpened();
    this.popup.openedSharedPopup.close();
    document.body.classList.add('no-scroll');
    this.popup.currentPopup.afterClosed().subscribe(() => this.popup.isClosed());
  }
}
