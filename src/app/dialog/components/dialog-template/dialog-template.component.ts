import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SectionNameService from 'src/app/services/section-name.service';
import DialogService from '../../../services/dialog.service';

@Component({
  selector: 'app-dialog-template',
  templateUrl: './dialog-template.component.html',
  styleUrls: ['./dialog-template.component.scss'],
})
export default class DialogTemplateComponent implements OnInit {
  constructor(
    private router: Router,
    private sectionName: SectionNameService,
    private dialogService: DialogService,
  ) {}

  public isInfoDialog = false;

  ngOnInit(): void {
    console.log('init dialog');
    this.dialogService.currentSourceData.subscribe((data) => {
      console.log(data);
      if (data.topic === 'registration'
      || data.topic === 'price'
      || data.topic === 'documents') {
        this.router.navigate(['choose']);
      } else if (data.topic === 'insurance') {
        this.router.navigate(['choose-insurance']);
      } else {
        this.router.navigate([data.section, data.topic]);
        this.isInfoDialog = true;
        this.dialogService.isOpened();
      }
      // this.dialogService.currentDialog.afterClosed().subscribe(
      //   () => this.dialogService.isClosed(),
      // );
      // this.dialogService.toggleScrolling();
    });

    // console.log('init dialog');
    // this.dialogService.currentTopic.subscribe((topic) => {
    //   if (
    //     topic === 'registration'
    //     || topic === 'price'
    //     || topic === 'documents') {
    //     this.router.navigate(['choose-country']);
    //   } else if (topic === 'insurance') {
    //     this.router.navigate(['choose-insurance']);
    //   } else {
    //     this.sectionName.currentSection.subscribe((name) => {
    //       this.router.navigate([name, topic]);
    //     });
    //     this.isInfoDialog = true;
    //     this.dialogService.isOpened();
    //     // this.Dialog.currentDialog.close();
    //     this.dialogService.currentDialog.afterClosed().subscribe(
    //       () => this.dialogService.isClosed(),
    //     );
    //     this.dialogService.toggleScrolling();
    // }
    // });
  }
}
