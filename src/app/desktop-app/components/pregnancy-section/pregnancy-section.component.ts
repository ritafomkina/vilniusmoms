import { Component } from '@angular/core';
import { Router } from '@angular/router';
import DialogService from 'src/app/services/dialog.service';
import PregnancyDataService from '../../services/pregnancy-data.service';
import SectionNameService from '../../../services/section-name.service';

@Component({
  selector: 'app-pregnancy-section',
  templateUrl: './pregnancy-section.component.html',
  styleUrls: ['./pregnancy-section.component.scss'],
})
export default class PregnancySectionComponent {
  constructor(
    private router: Router,
    private dialogService: DialogService,
    private sectionName: SectionNameService,
    private dataService: PregnancyDataService,
  ) {}

  cards = this.dataService.getData();

  openDialog(topic: string) {
    // this.dialogService.currentDialog = this.dialog.open(DialogTemplateComponent, {
    //   data: topic,
    // });]
    this.router.navigate(['dialog']);
    // this.dialogService.openDialog(topic);
    // console.log('open dialog');
    // this.router.navigate(['dialog']);
    this.dialogService.setSourceData('pregnancy', topic);
    // this.sectionName.openedSection('pregnancy');
  }
}
