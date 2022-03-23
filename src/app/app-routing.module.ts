import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './content/pages/admin/admin.component';
import { ERROR404Component } from './content/pages/error404/error404.component';
import { MainComponent } from './content/pages/main/main.component';
import { SoftwareIdComponent } from './content/pages/software-id/software-id.component';
import { SoftwareComponent } from './content/pages/software/software.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'software',
    component: SoftwareComponent,
  },
  {
    path: 'software/:id',
    component: SoftwareIdComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: '**',
    component: ERROR404Component
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot( 
      routes,
      { useHash: true } 
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
