import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Popup from 'src/app/services/popup.service';
import DocumentsBELComponent from '../../birth-popups/documents-bel/documents-bel.component';
import DocumentsRUComponent from '../../birth-popups/documents-ru/documents-ru.component';
import DocumentsUAComponent from '../../birth-popups/documents-ua/documents-ua.component';
import PriceBELComponent from '../../pregnancy-popups/price-bel/price-bel.component';
import PriceUAComponent from '../../pregnancy-popups/price-ua/price-ua.component';
import RegistrationBELComponent from '../../pregnancy-popups/registration-bel/registration-bel.component';
import RegistrationUAComponent from '../../pregnancy-popups/registration-ua/registration-ua.component';

@Component({
  selector: 'app-choose-country-popup',
  templateUrl: './choose-country-popup.component.html',
  styleUrls: ['./choose-country-popup.component.scss'],
})
export default class ChooseCountryPopupComponent {
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private popup: Popup,

  ) {}

  openDialog(country: string) {
    const { data } = this;
    if (data.topic === 'registration') {
      // eslint-disable-next-line default-case
      switch (country) {
        case 'UA': this.popup.currentPopup = this.dialog.open(RegistrationUAComponent);
          break;
        case 'BEL': this.popup.currentPopup = this.dialog.open(RegistrationBELComponent);
          break;
        case 'RU': this.popup.currentPopup = this.dialog.open(RegistrationBELComponent);
          break;
      }
    } else if (data.topic === 'price') {
      // eslint-disable-next-line default-case
      switch (country) {
        case 'UA': this.popup.currentPopup = this.dialog.open(PriceUAComponent);
          break;
        case 'BEL': this.popup.currentPopup = this.dialog.open(PriceBELComponent);
          break;
        case 'RU': this.popup.currentPopup = this.dialog.open(PriceBELComponent);
          break;
      }
    } else if (data.topic === 'documents') {
      // eslint-disable-next-line default-case
      switch (country) {
        case 'UA': this.popup.currentPopup = this.dialog.open(DocumentsUAComponent);
          break;
        case 'BEL': this.popup.currentPopup = this.dialog.open(DocumentsBELComponent);
          break;
        case 'RU': this.popup.currentPopup = this.dialog.open(DocumentsRUComponent);
          break;
      }
    }
    this.popup.isOpened();
    this.popup.openedSharedPopup.close();
    document.body.classList.add('no-scroll');
    this.popup.currentPopup.afterClosed().subscribe(() => this.popup.isClosed());
  }
}
