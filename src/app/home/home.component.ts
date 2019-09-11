import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LogoutComponent } from '../_components/dialogs/logout/logout.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialogservice: NbDialogService
  ) { }

  ngOnInit() {
    // console.log(JSON.parse(localStorage.currentUser));
  }
  opendialog() {
    this.dialogservice.open(LogoutComponent, {
      closeOnBackdropClick: false,
      context: {
        title: 'Are you logout ?',
      }
    });
  }
}
