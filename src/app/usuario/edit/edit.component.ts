import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

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

  constructor(private router:Router, private service:ServiceService) { }

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
      this.service.cambiarNombre(this.id, this.usuario);

      this.verLista();
  }

  verLista() {
    this.router.navigate(['admin/list']);
  }

}
