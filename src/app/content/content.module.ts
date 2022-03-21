import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { AdminComponent } from './pages/admin/admin.component';
import { ERROR404Component } from './pages/error404/error404.component';
import { MainComponent } from './pages/main/main.component';
import { SoftwareIdComponent } from './pages/software-id/software-id.component';
import { SoftwareComponent } from './pages/software/software.component';

const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets',
  defaultOptions: { scrollBeyondLastLine: false }
};


@NgModule({
  declarations: [
    MainComponent,
    SoftwareComponent,
    ERROR404Component,
    AdminComponent,
    SoftwareIdComponent
  ],
  exports: [
    MainComponent,
    SoftwareComponent,
    ERROR404Component,
    AdminComponent,
    SoftwareIdComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot(monacoConfig)
  ]
})

export class ContentModule { }
