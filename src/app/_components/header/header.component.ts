import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LogoutComponent } from '../dialogs/logout/logout.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user = JSON.parse(localStorage.currentUser);
  constructor(
    private dialogservice: NbDialogService
  ) { }

  opendialog() {
    this.dialogservice.open(LogoutComponent, {
      closeOnBackdropClick: false,
      context: {
        title: 'Are you logout ?',
      }
    });
  }
}
