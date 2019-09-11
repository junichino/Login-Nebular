import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  @Input() title: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    protected ref: NbDialogRef<LogoutComponent>
  ) { }

  close() {
    this.ref.close();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
