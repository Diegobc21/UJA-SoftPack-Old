import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  pass: boolean;

  public passwordConfirmation: string;

  usuario: Usuario;


  constructor(private router: Router, private service: ServiceService) {
    this.pass = false;
    this.passwordConfirmation = "";
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

  validarEmail(email: string) {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
  }

  registrar(){

    if (this.validarEmail(this.usuario.email)){
      this.service.registrarUsuario(this.usuario)
      .subscribe(result => {
        this.verLista();
      });
    } else {
      console.log("no es un email");
    }
  }

  verLista() {
    this.router.navigate(['admin/list']);
  }

}
