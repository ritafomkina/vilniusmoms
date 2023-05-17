import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Popup from 'src/app/services/popup.service';
import PregnancyDataService from '../../services/pregnancy-data.service';
import BenefitsComponent from '../pregnancy-popups/benefits/benefits.component';
import ChooseCountryPopupComponent from '../shared-pupups/choose-country-popup/choose-country-popup.component';
import ChooseInsuranseComponent from '../pregnancy-popups/choose-insurance/choose-insurance.component';
import HospitalsComponent from '../pregnancy-popups/hospitals/hospitals.component';

@Component({
  selector: 'app-pregnancy-section',
  templateUrl: './pregnancy-section.component.html',
  styleUrls: ['./pregnancy-section.component.scss'],
})
export default class PregnancySectionComponent {
  constructor(
    private dataService: PregnancyDataService,
    private dialog: MatDialog,
    private popup: Popup,
  ) {}

  cards = this.dataService.getData();

  openDialog(topic: string) {
    // eslint-disable-next-line default-case
    switch (topic) {
      case 'registration': this.popup.openedSharedPopup = this.dialog.open(ChooseCountryPopupComponent, {
        data: { topic },
      });
        break;
      case 'hospitals': this.popup.currentPopup = this.dialog.open(HospitalsComponent);
        break;
      case 'price': this.popup.openedSharedPopup = this.dialog.open(ChooseCountryPopupComponent, {
        data: { topic },
      });
        break;
      case 'insurance': this.popup.openedSharedPopup = this.dialog.open(ChooseInsuranseComponent, {
        data: { topic },
      });
        break;
      case 'benefits': this.popup.openedSharedPopup = this.dialog.open(BenefitsComponent);
        break;
    }
    this.popup.toggleScrolling();
  }
}
