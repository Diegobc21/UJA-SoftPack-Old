import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/core/service/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../core/model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pass:boolean = false;

  usuario: Usuario;

  constructor(private router: Router, private service: UsuarioService) {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
    this.usuario.email = "";
    this.usuario.password = "";
  }

  login() {
    console.log(this.usuario);

    this.router.navigate(['']);
  }

}
