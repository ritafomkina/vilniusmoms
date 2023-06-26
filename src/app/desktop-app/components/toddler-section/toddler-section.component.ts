import { Component } from '@angular/core';
import { Router } from '@angular/router';
import DialogService from 'src/app/services/dialog.service';
import SectionNameService from '../../../services/section-name.service';
import ToddlerDataService from '../../services/toddler-data.service';

@Component({
  selector: 'app-toddler-section',
  templateUrl: './toddler-section.component.html',
  styleUrls: ['./toddler-section.component.scss'],
})
export default class ToddlerSectionComponent {
  constructor(
    private router: Router,
    private dialogService: DialogService,
    private sectionName: SectionNameService,
    private dataService: ToddlerDataService,
  ) {}

  cards = this.dataService.getData();

  openDialog($event: MouseEvent, topic: string) {
    $event.stopPropagation();
    const root = { section: 'toddler', topic };
    this.dialogService.setSourceData(root);
    this.dialogService.isOpened();
    document.body.classList.add('noscroll');
    this.router.navigate([root.section, root.topic]);
  }
}
