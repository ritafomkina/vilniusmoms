import { Component } from '@angular/core';
import { Router } from '@angular/router';
import SectionNameService from '../../../services/section-name.service';
import DialogService from '../../../services/dialog.service';

@Component({
  selector: 'app-links-section',
  templateUrl: './links-section.component.html',
  styleUrls: ['./links-section.component.scss'],
})
export default class LinksSectionComponent {
  constructor(
    private router: Router,
    private dialogService: DialogService,
    private sectionName: SectionNameService,
  ) {}

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
    // this.sectionName.openedSection('links');
  }
}
