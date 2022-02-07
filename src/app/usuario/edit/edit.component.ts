import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../core/model/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/service/usuario.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  usuario: Usuario;

  nuevoNombre: string;
  nuevoEmail: string;

  id: number;

  constructor(private router: Router, private service: UsuarioService) { }

  ngOnInit(): void {    
    this.id = Number(localStorage.getItem("id"));
    this.service.buscarIdUnico(this.id)
    .subscribe(data => {
      this.usuario = data;
    });
  }

  editar(nuevoNombre: string, nuevoEmail: string){ 
      this.usuario.nombre = nuevoNombre;
      this.usuario.email = nuevoEmail;
      this.service.editar(this.id, this.usuario);

      this.verLista();
  }

  verLista() {
    this.router.navigate(['admin/list']);
  }

}
