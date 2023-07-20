// import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import DialogService from 'src/app/services/dialog.service';

@Component({
  selector: 'app-desktop-content',
  templateUrl: './desktop-content.component.html',
  styleUrls: ['./desktop-content.component.scss'],
})
export default class DesktopContentComponent implements OnInit {
  constructor(
    private dialogService: DialogService,
    // private router: Router,
    // private locationStrategy: LocationStrategy,
  ) {
  }

  public sections = ['Беременность', 'Малыш родился', 'Тоддлер', 'Полезные ссылки'];

  public dialog = false;

  ngOnInit(): void {
    this.dialogService.currentDialogStatus.subscribe((status) => {
      this.dialog = status;
      console.log(this.dialog);
    });
  }

  // public closeDialog($event: MouseEvent) {
  //   if (this.dialog) {
  //     const el = $event?.target as HTMLElement;
  //     if ((el.closest('.dialog') && el.closest('.close-btn')) || !el.closest('.dialog')) {
  //       this.dialogService.isClosed();
  //       this.router.navigateByUrl(this.locationStrategy.getBaseHref());
  //     }
  //   }
  // }
}
