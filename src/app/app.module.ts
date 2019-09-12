import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbInputModule,
  NbIconModule,
  NbCheckboxModule,
  NbAlertModule,
  NbTooltipModule,
  NbDialogModule,
  NbDialogService,
  NbUserModule,
  NbActionsModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './_components/dialogs/logout/logout.component';
import { HeaderComponent } from './_components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbIconModule,
    NbCheckboxModule,
    NbAlertModule,
    NbActionsModule,
    NbTooltipModule,
    NbDialogModule.forRoot(),
    NbUserModule,
    NbEvaIconsModule
  ],
  providers: [
    NbDialogService
  ],
  entryComponents: [
    LogoutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
