import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './content/pages/admin/admin.component';
import { ERROR404Component } from './content/pages/error404/error404.component';
import { MainComponent } from './content/pages/main/main.component';
import { SoftwareIdComponent } from './content/pages/software-id/software-id.component';
import { SoftwareComponent } from './content/pages/software/software.component';
import { EditComponent } from './usuario/edit/edit.component';
import { ListComponent } from './usuario/list/list.component';
import { LoginComponent } from './usuario/login/login.component';
import { ProfileComponent } from './usuario/profile/profile.component';
import { RegisterComponent } from './usuario/register/register.component';
import { SearchComponent } from './usuario/search/search.component';


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
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'list',
        component: ListComponent
      }
    ]
  },
  {
    path: 'edit',
    component: EditComponent
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
