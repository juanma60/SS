import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SkatersService {

  urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = environment.urlApi;
  }

  getQuery(query: string) {

    const url = this.urlApi + query;

    const headers = new HttpHeaders();
    headers.append('x-api-key', `12345678901234567890`);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');


    return this.http.get(url, { headers });
  }

  getAll() {
    return this.getQuery('Skaters/all/');
  }

  getId(id: number) {

    const url = this.urlApi + 'Skaters/id/' + id;
    return this.http.get(url);
  }
}

