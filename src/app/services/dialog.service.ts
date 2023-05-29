import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import SectionNameService from './section-name.service';

@Injectable({
  providedIn: 'root',
})
export default class DialogService {
  constructor(
    private router: Router,
    private sectionName: SectionNameService,
  ) {
  }

  public currentDialog: MatDialogRef<any>;

  private open = new BehaviorSubject<boolean>(false);

  public currentDialogStatus = this.open.asObservable();

  public isOpened(): void {
    this.open.next(true);
  }

  public isClosed(): void {
    this.open.next(false);
  }

  private sourceData = new BehaviorSubject<[string, string]>(['default', 'default']);

  public currentSourceData = this.sourceData.asObservable();

  public setSourceData(section: string, topic: string): void {
    this.sourceData.next([section, topic]);
  }

  public toggleScrolling() {
    document.body.classList.add('no-scroll');
    // this.openedSharedDialog?.afterClosed().subscribe(
    //   () => {
    //     this.currentDialogStatus.subscribe(
    //   (state) => (state
    //   ? document.body.classList.add('no-scroll')
    //   : document.body.classList.remove('no-scroll')));
    //  },
    // );
    this.currentDialog?.afterClosed().subscribe(() => {
      document.body.classList.remove('no-scroll');
      this.isClosed();
    });
  }

  public openDialog(topic: string) {
    if (
      topic === 'registration'
      || topic === 'price'
      || topic === 'documents') {
      this.router.navigate(['dialog', 'choose-country']);
    } else if (topic === 'insurance') {
      this.router.navigate(['dialog', 'choose-insurance']);
    } else {
      this.sectionName.currentSection.subscribe((name) => {
        this.router.navigate(['dialog', name, topic]);
      });
    }
  }
}
