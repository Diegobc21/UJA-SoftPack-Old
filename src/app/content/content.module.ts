import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './pages/main/main.component';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SoftwareComponent } from './pages/software/software.component';
import { ERROR404Component } from './pages/error404/error404.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    SoftwareComponent,
    ERROR404Component,
    AdminComponent
  ],
  exports: [
    MainComponent,
    SoftwareComponent,
    ERROR404Component,
    AdminComponent
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
