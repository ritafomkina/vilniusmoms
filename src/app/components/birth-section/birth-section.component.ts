import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Popup from 'src/app/services/popup.service';
import BirthDataService from '../../services/birth-data.service';
import ClinicComponent from '../birth-popups/clinic/clinic.component';
import DadsBenefitsComponent from '../birth-popups/dads-benefits/dads-benefits.component';
import MamashealthComponent from '../birth-popups/mamashealth/mamashealth.component';
import ChooseCountryPopupComponent from '../shared-pupups/choose-country-popup/choose-country-popup.component';

@Component({
  selector: 'app-birth-section',
  templateUrl: './birth-section.component.html',
  styleUrls: ['./birth-section.component.scss'],
})
export default class BirthSectionComponent {
  constructor(
    private birthData: BirthDataService,
    private dialog: MatDialog,
    private popup: Popup,
  ) {}

  cards = this.birthData.getData();

  openDialog(topic: string) {
    // eslint-disable-next-line default-case
    switch (topic) {
      case 'clinic': this.popup.currentPopup = this.dialog.open(ClinicComponent);
        break;
      case 'documents': this.popup.openedSharedPopup = this.dialog.open(ChooseCountryPopupComponent, {
        data: { topic },
      });
        break;
      case 'health': this.popup.currentPopup = this.dialog.open(MamashealthComponent);
        break;
      case 'dads-benefits': this.popup.currentPopup = this.dialog.open(DadsBenefitsComponent);
        break;
    }
    this.popup.toggleScrolling();
  }
}
