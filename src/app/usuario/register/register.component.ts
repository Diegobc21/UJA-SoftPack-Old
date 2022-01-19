import { Component, OnDestroy, OnInit } from '@angular/core';
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

  registrar(){
    this.service.registrarUsuario(this.usuario)
    .subscribe(result => {
      this.verLista();
    });
  }

  verLista() {
    this.router.navigate(['settings/list']);
  }

}
