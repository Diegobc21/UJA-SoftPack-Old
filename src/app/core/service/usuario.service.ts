import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http:HttpClient ) {
  }

  UrlUsuario: string = 'http://localhost:8080/ujasoftpack/usuarios';


  registrarUsuario(usuario: Usuario){
    return this.http.post<Usuario>(this.UrlUsuario, usuario);
  }

  getUsuarios(): Observable<any>{
    return this.http.get<Usuario[]>(this.UrlUsuario);
  }

  buscar(id: number | undefined, nombre: string | undefined): Observable<any>{
    if (nombre == undefined){
      nombre = "";
    }
    if (id == undefined){
      return this.http.get<Usuario[]>(this.UrlUsuario + '?nombre=' + nombre);
    }
        
    return this.http.get<Usuario[]>(this.UrlUsuario + '?id=' +  id + '&nombre=' + nombre);
  }

  buscarIdUnico(id: any): Observable<any>{
    return this.http.get<Usuario>(this.UrlUsuario + '/' + id);
  }

  editar(id: number, usuario: Usuario){
    return this.http.put(this.UrlUsuario + '/' + id, usuario).subscribe();
  }

  borrarUsuario(usuario: Usuario){
    return this.http.delete(this.UrlUsuario  + '/' +  usuario.id);
  }

}
