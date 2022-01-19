import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from '../usuario/profile/profile.component';
import { LoginComponent } from '../usuario/login/login.component';
import { RegisterComponent } from '../usuario/register/register.component';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SoftwareComponent } from './pages/software/software.component';
import { ERROR404Component } from './pages/error404/error404.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    SoftwareComponent,
    ERROR404Component,
    SettingsComponent
  ],
  exports: [
    MainComponent,
    SoftwareComponent,
    ERROR404Component,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class ContentModule { }
