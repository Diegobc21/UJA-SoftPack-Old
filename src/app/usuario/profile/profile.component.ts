import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private service:ServiceService, private router:Router

  ) { }

  ngOnInit(): void {
    // this.service.getUsuario()
    // .subscribe(data => {
    //   this.usuario = data;
    // })
  }

}
