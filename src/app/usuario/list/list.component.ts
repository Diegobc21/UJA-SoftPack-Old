import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/core/service/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../core/model/usuario';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  usuarios: Usuario[] = [];

  seleccionado: Usuario;

  nombre: string;
  nuevoNombre: string;
  nuevoEmail: string;

  // page = 1;
  // pageSize = 5;
  // collectionSize: number;

  constructor(private service: UsuarioService, private router:Router) {

  }

  ngOnInit(): void {
    this.service.getUsuarios()
    .subscribe(data => {
      this.usuarios = data;
      //  this.collectionSize = this.usuarios.length;
    })
    // this.nombre = "";
    this.seleccionado = new Usuario();
    
  }

  editar(nuevoNombre: string, nuevoEmail: string){ 
    this.seleccionado.nombre = nuevoNombre;
    this.seleccionado.email = nuevoEmail;
    this.service.editar(this.seleccionado.id, this.seleccionado);

    this.router.navigate(['admin/list']);
}

  Borrar(usuario:Usuario){
    this.service.borrarUsuario(usuario)
    .subscribe(data => {
      this.usuarios = this.usuarios.filter( u => u !== usuario );      
    })
  }

  select(usuario: Usuario){
    this.nombre = usuario.nombre;
    this.seleccionado = usuario;
  }

  
  // actualizar() {
  //     this.usuarios.map((u, i) => ({n: i + 1, ...u}))
  //     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  // }

  // Editar(id: number){
  //   localStorage.setItem("id", id.toString());
  //   this.router.navigate(["edit"]);
  // }

}
