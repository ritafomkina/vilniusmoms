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

  openDialog($event: MouseEvent, topic: string) {
    $event.stopPropagation();
    const root = { section: 'pregnancy', topic };
    this.dialogService.setSourceData(root);
    this.dialogService.isOpened();
    document.body.classList.add('noscroll');
    this.router.navigate([root.section, root.topic]);
  }
}
