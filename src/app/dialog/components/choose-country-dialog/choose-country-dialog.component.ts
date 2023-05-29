import { Component } from '@angular/core';
import { Router } from '@angular/router';
import SectionNameService from 'src/app/services/section-name.service';

@Component({
  selector: 'app-choose-country-dialog',
  templateUrl: './choose-country-dialog.component.html',
  styleUrls: ['./choose-country-dialog.component.scss'],
})
export default class ChooseCountryDialogComponent {
  constructor(
    private router: Router,
    private sectionName: SectionNameService,
  ) {}

  openDialog(country: string) {
    this.sectionName.currentSection.subscribe((name) => {
      this.router.navigate([name, country]);
    });
  }
}
