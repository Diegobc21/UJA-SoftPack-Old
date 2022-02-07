import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ContentModule } from './content/content.module';
import { UsuarioService } from './core/service/usuario.service';
import { UsuarioModule } from './usuario/usuario.module';
import { LoadspinnerInterceptor } from './core/interceptors/loadspinner.interceptor';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ContentModule,
    BrowserModule,
    SharedModule,
    UsuarioModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [
    UsuarioService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadspinnerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
