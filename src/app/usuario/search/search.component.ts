import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  usuarios: Usuario[] = [];

  id: number;
  nombre: string;

  constructor( private router: Router, private service: ServiceService ) { }

  ngOnInit(): void {
  }

  buscar(id:number | undefined, nombre: string){
    if (id !=undefined && id.toString() == "") {
      id = undefined;
    } 

    this.service.buscar(id, nombre)
    .subscribe(data => {
      this.usuarios = data;
    }, error => console.error(error));
  }

}
