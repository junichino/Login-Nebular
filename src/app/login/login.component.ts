import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services';
import { first } from 'rxjs/operators';

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
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    if (this.authService.currentUserValue) {
      // console.log(localStorage);
      // this.router.navigate(['/home']);
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
    // const passhash = this.md5.init(this.f.password.value);
    console.log(this.loginForm);
    if (this.loginForm.invalid) {
      return;
    }
    this.loginLoading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(`localStorage => ${localStorage.currentUser}`);
          // this.router.navigate(['/home']);
          this.loginSuccess = true;
          this.loginLoading = false;
        },
        error => {
          this.loginError = true;
          this.loginLoading = false;
        }
      );
  }
}
