import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import DialogService from '../../../services/dialog.service';

@Component({
  selector: 'app-choose-insurance',
  templateUrl: './choose-insurance.component.html',
  styleUrls: ['./choose-insurance.component.scss'],
})
export default class ChooseInsuranseComponent {
  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,
    public dialog: MatDialog,
    private dialogService: DialogService,

  ) {}

  openDialog(insurance: string) {
    this.routerParams.params.subscribe(
      (params) => this.router.navigate([params, insurance]),
    );
    this.dialogService.isOpened();
    this.dialogService.currentDialog.close();
    // document.body.classList.add('no-scroll');
  }
}
