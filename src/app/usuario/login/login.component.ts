import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pass:boolean = false;

  usuario: Usuario;

  constructor(private router: Router, private service: ServiceService) {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
    this.usuario.email = "";
    this.usuario.password = "";
  }

  login() {
    console.log(this.usuario);
    // this.service.login(usuario).subscribe( data => {
    //   console.log(data);
    // });
  }

}
