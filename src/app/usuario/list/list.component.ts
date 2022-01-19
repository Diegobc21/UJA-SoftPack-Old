import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { Usuario } from '../../model/usuario';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  usuarios: Usuario[] = [];

  seleccionado: Usuario;

  nombre: String;

  constructor(private service:ServiceService, private router:Router) {
      
  }

  ngOnInit(): void {
    this.service.getUsuarios()
    .subscribe(data => {
      this.usuarios = data;
    })
    this.nombre = "";
  }

  Editar(id: number){
    localStorage.setItem("id", id.toString());
    this.router.navigate(["edit"]);
  }

  Borrar(usuario:Usuario){
    this.service.borrarUsuario(usuario)
    .subscribe(data => {
      this.usuarios = this.usuarios.filter( u => u !== usuario );      
    })
  }

  UsuarioActual(usuario: Usuario){
    this.nombre = usuario.nombre;
    this.seleccionado = usuario;
  }

}
