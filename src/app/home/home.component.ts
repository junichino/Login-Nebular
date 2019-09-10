import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { AuthService } from '../_services';
import { LogoutComponent } from '../_components/dialogs/logout/logout.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialogservice: NbDialogService
  ) { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.currentUser));
  }
  opendialog() {
    this.dialogservice.open(LogoutComponent, {
      context: {
        title: 'This is a title passed to the dialog component',
      }
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
