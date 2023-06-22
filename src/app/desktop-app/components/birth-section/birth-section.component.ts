import { Component } from '@angular/core';
import { Router } from '@angular/router';
import BirthDataService from '../../services/birth-data.service';
import DialogService from '../../../services/dialog.service';
import SectionNameService from '../../../services/section-name.service';

@Component({
  selector: 'app-birth-section',
  templateUrl: './birth-section.component.html',
  styleUrls: ['./birth-section.component.scss'],
})
export default class BirthSectionComponent {
  constructor(
    private router: Router,
    private dialogService: DialogService,
    private sectionName: SectionNameService,
    private dataService: BirthDataService,
  ) {}

  cards = this.dataService.getData();

  openDialog(topic: string) {
    // this.dialogService.currentDialog = this.dialog.open(DialogTemplateComponent, {
    //   data: topic,
    // });
    // this.sectionName.openedSection('pregnancy');
    // this.dialogService.toggleScrolling();
    this.router.navigate(['dialog']);
    this.dialogService.setSourceData({ section: 'pregnancy', topic });
    // this.router.navigate(['dialog']);
    // this.dialogService.setTopic(topic);
    // this.sectionName.openedSection('birth');
  }
}
