import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/core/service/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../core/model/usuario';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private service: UsuarioService, private router:Router
  ) { }

  ngOnInit(): void {
  }

}
