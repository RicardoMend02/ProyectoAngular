import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  url_api= 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  getContactos(): Observable<any>{
    return this.http.get(`${this.url_api}/obtener-listas-contactos`)
  }

  getContacto(id: string):Observable<any>{
    return this.http.get(`${this.url_api}/obtener-contacto/${id}`)
  }

  postContacto(contactoFormulario: Contacto): Observable<any>{
    return this.http.post(`${this.url_api}/crear-contacto`, contactoFormulario)
  }

  putContacto(id:any, contactoFormulario: Contacto):Observable<any>{
    return this.http.put(`${this.url_api}/actualizar-contacto/${id}`, contactoFormulario)
  }

  deleteContacto(id:string):Observable<any>{
    return this.http.delete(`${this.url_api}/borrar-contacto/${id}`)
  }


}
