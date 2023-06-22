import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import DialogTemplateComponent
// from 'src/app/dialog/components/dialog-template/dialog-template.component';
import DialogService from 'src/app/services/dialog.service';
import PregnancyDataService from '../../services/pregnancy-data.service';

@Component({
  selector: 'app-pregnancy-section',
  templateUrl: './pregnancy-section.component.html',
  styleUrls: ['./pregnancy-section.component.scss'],
})
export default class PregnancySectionComponent {
  constructor(
    private router: Router,
    // private dialog: MatDialog,
    private dialogService: DialogService,
    private dataService: PregnancyDataService,
  ) {}

  cards = this.dataService.getData();

  openDialog(topic: string) {
    // this.dialogService.currentDialog = this.dialog.open(DialogTemplateComponent);
    // this.dialogService.openDialog(topic);
    // console.log('open dialog');
    // this.router.navigate(['dialog']);
    this.dialogService.setSourceData({ section: 'pregnancy', topic });
    this.router.navigate(['dialog']);
    // this.sectionName.openedSection('pregnancy');
  }
}
