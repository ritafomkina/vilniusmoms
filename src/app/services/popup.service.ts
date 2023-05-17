import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class Popup {
  openedSharedPopup: MatDialogRef<any>;

  currentPopup: MatDialogRef<any>;

  private open = new BehaviorSubject<boolean>(false);

  public currentPopupStatus = this.open.asObservable();

  public isOpened(): void {
    this.open.next(true);
  }

  public isClosed(): void {
    this.open.next(false);
  }

  public toggleScrolling() {
    document.body.classList.add('no-scroll');
    this.openedSharedPopup?.afterClosed().subscribe(
      () => {
        this.currentPopupStatus.subscribe((state) => (state ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')));
      },
    );
    this.currentPopup?.afterClosed().subscribe(() => {
      document.body.classList.remove('no-scroll');
      this.isClosed();
    });
  }
}
