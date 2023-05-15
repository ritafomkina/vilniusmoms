import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Popup from 'src/app/services/popup.service';
import ToddlerDataService from '../../services/toddler-data.service';
import ChooseKindergartenComponent from '../toddler-popups/choose-kindergarten/choose-kindergarten.component';
import KidsActivitiesComponent from '../toddler-popups/kids-activities/kids-activities.component';
import KidsEntertainmentComponent from '../toddler-popups/kids-entertainment/kids-entertainment.component';
import KidsHealthComponent from '../toddler-popups/kids-health/kids-health.component';
import KidsMoneyComponent from '../toddler-popups/kids-money/kids-money.component';
import KidsPoolstComponent from '../toddler-popups/kids-pools/kids-pools.component';
import KindergartenApplicationComponent from '../toddler-popups/kindergarten-application/kindergarten-application.component';
import KindergartenDocumentsnComponent from '../toddler-popups/kindergarten-documents/kindergarten-documents.component';
import KindergartenPriceComponent from '../toddler-popups/kindergarten-price/kindergarten-price.component';

@Component({
  selector: 'app-toddler-section',
  templateUrl: './toddler-section.component.html',
  styleUrls: ['./toddler-section.component.scss'],
})
export default class ToddlerSectionComponent {
  constructor(
    private dataService: ToddlerDataService,
    private dialog: MatDialog,
    private popup: Popup,
  ) {}

  cards = this.dataService.getData();

  openDialog(topic: string) {
    // eslint-disable-next-line default-case
    switch (topic) {
      case 'choose-kindergarten': this.popup.currentPopup = this.dialog.open(ChooseKindergartenComponent);
        break;
      case 'kindergarten-price': this.popup.currentPopup = this.dialog.open(KindergartenPriceComponent, {
        data: { topic },
      });
        break;
      case 'kindergarten-application': this.popup.currentPopup = this.dialog.open(KindergartenApplicationComponent);
        break;
      case 'kindergarten-documents': this.popup.currentPopup = this.dialog.open(KindergartenDocumentsnComponent);
        break;
      case 'kids-health': this.popup.currentPopup = this.dialog.open(KidsHealthComponent);
        break;
      case 'kids-money': this.popup.currentPopup = this.dialog.open(KidsMoneyComponent);
        break;
      case 'kids-entertainment': this.popup.currentPopup = this.dialog.open(KidsEntertainmentComponent);
        break;
      case 'kids-activities': this.popup.currentPopup = this.dialog.open(KidsActivitiesComponent);
        break;
      case 'kids-pools': this.popup.currentPopup = this.dialog.open(KidsPoolstComponent);
        break;
    }
    this.popup.toggleScrolling();
  }
}
