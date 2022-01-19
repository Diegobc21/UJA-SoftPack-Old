import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url: string = 'http://localhost:8080/ujasoftpack';

  UrlUsuario: string = this.Url + '/usuarios';

  login(usuario: any): Observable<any> {    
    return this.http.post(this.UrlUsuario, usuario);
  }

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

  

  cambiarNombre(id: number, usuario: Usuario){
    return this.http.put(this.UrlUsuario + '/' + id, usuario).subscribe();
  }

  borrarUsuario(usuario: Usuario){
    return this.http.delete(this.UrlUsuario  + '/' +  usuario.id);
  }

}
