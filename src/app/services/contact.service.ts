import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    console.log('Contactoservice está funcionando');
  }

  //Metodo GET para obtener todos los contactos
  getAllContact(): Observable<Contact> {
    const url = `${this.apiUrl}/contact`;
    return this.http.get<Contact>(url);
  }

  //Metodo POST para crear contactos
  addContact(contacto: Contact) {
    const url = `${this.apiUrl}/contact`;
    return this.http.post<Contact>(url, contacto);
  }

  //Metodo DELETE para crear contactos
  deleteContact(id: number) {
    const url = `${this.apiUrl}/contact`;
    return this.http.delete<Contact>(`${url}/${id}`);
  }

  //Fetching data on edit
  fetchdata(id: number): Observable<Contact> {
    const url = `${this.apiUrl}/contact`;
    return this.http.get<Contact>(`${url}/${id}`);
  }

  //UPDATE data
  updateContact(data: Contact, id: number) {
    const url = `${this.apiUrl}/contact`;
    return this.http.put<Contact>(`${url}/${id}`, data);
  }
}
