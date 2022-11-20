import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChangePasswordComponent } from '../../components/changePasswordModal/change-password.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  dialogRef!: MatDialogRef<ChangePasswordComponent>;

  constructor(public dialog: MatDialog) { }

  open() {
    if(this.dialogRef) {
      this.dialogRef.close();
    }
    this.dialogRef = this.dialog.open(ChangePasswordComponent, {
      panelClass: 'app-dialog'
    });
  }
  close() {
    if(this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
