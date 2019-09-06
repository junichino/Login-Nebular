import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services';
import { first } from 'rxjs/operators';
import * as md5 from 'md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginLoading = false;
  loginSuccess = false;
  loginError = false;
  submitted = false;
  md5: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loginSuccess = false;
    this.loginError = false;
    const passhash = md5(this.f.password.value);
    if (this.loginForm.invalid) {
      return;
    }
    this.loginLoading = true;
    setTimeout(() => {
      this.authService.login(this.f.username.value, passhash)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/home']);
          this.loginSuccess = true;
          this.loginLoading = false;
        },
        error => {
          this.loginError = true;
          this.loginLoading = false;
        }
      );
    }, 2000);
  }
}
