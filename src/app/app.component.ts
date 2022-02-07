import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './core/service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;

  constructor(private http: HttpClient, private service: UsuarioService){
    this.title = 'UJA-SoftPack';
  }
  
}
