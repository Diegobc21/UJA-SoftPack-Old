import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Software } from '../model/software.interface';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000";

  getSoftware(): Observable<Software[]>{
    return this.http.get<Software[]>(this.url + "/software");
  }

  find(id: string):Observable<Software>{
      return this.http.get<Software>(this.url + "/software/" + id);
    
  }
}
