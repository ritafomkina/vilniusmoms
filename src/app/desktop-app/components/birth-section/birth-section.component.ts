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

  openDialog($event: MouseEvent, topic: string) {
    $event.stopPropagation();
    const root = { section: 'birth', topic };
    this.dialogService.setSourceData(root);
    this.dialogService.isOpened();
    document.body.classList.add('noscroll');
    this.router.navigate([root.section, root.topic]);
  }
}
