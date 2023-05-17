import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Popup from 'src/app/services/popup.service';
import BabysittersComponent from '../links-popups/babysitters/babysitters.component';
import ChatsComponent from '../links-popups/chats/chats.component';
import DentistComponent from '../links-popups/dentist/dentist.component';
import DoulasComponent from '../links-popups/doulas/doulas.component';
import FeedBacksComponent from '../links-popups/feed-backs/feed-backs.component';
import HelpinLTsComponent from '../links-popups/helpin-lt/helpin-lt.component';
import HelpinUAComponent from '../links-popups/helpin-ua/helpin-ua.component';
import KidsGoodsComponent from '../links-popups/kids-goods/kids-goods.component';
import ReusesComponent from '../links-popups/reuse/reuse.component';
import SecondHandsComponent from '../links-popups/second-hands/second-hands.component';

@Component({
  selector: 'app-links-section',
  templateUrl: './links-section.component.html',
  styleUrls: ['./links-section.component.scss'],
})
export default class LinksSectionComponent {
  constructor(
    private dialog: MatDialog,
    private popup: Popup,
  ) {}

  openDialog(topic: string) {
    // eslint-disable-next-line default-case
    switch (topic) {
      case 'chats': this.popup.currentPopup = this.dialog.open(ChatsComponent);
        break;
      case 'goods': this.popup.currentPopup = this.dialog.open(KidsGoodsComponent);
        break;
      case 'reuse': this.popup.currentPopup = this.dialog.open(ReusesComponent);
        break;
      case 'second-hands': this.popup.currentPopup = this.dialog.open(SecondHandsComponent);
        break;
      case 'doulas': this.popup.currentPopup = this.dialog.open(DoulasComponent);
        break;
      case 'babysitters': this.popup.currentPopup = this.dialog.open(BabysittersComponent);
        break;
      case 'dentists': this.popup.currentPopup = this.dialog.open(DentistComponent);
        break;
      case 'feed-backs': this.popup.currentPopup = this.dialog.open(FeedBacksComponent);
        break;
      case 'helpinLT': this.popup.currentPopup = this.dialog.open(HelpinLTsComponent);
        break;
      case 'helpinUA': this.popup.currentPopup = this.dialog.open(HelpinUAComponent);
        break;
    }
    this.popup.toggleScrolling();
  }
}
