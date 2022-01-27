import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  usuarios: Usuario[] = [];

  seleccionado: Usuario;

  nombre: String;

  page = 1;
  pageSize = 5;
  collectionSize: number;

  constructor(private service:ServiceService, private router:Router) {

  }

  ngOnInit(): void {
    this.service.getUsuarios()
    .subscribe(data => {
      this.usuarios = data;
      // this.collectionSize = this.usuarios.length;
    })
    this.nombre = "";
    
  }

  actualizar() {
      this.usuarios.map((u, i) => ({n: i + 1, ...u}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
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

  Confirmar(usuario: Usuario){
    this.nombre = usuario.nombre;
    this.seleccionado = usuario;
  }

}
