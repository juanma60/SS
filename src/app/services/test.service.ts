import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  urlApi: string;

  constructor(private http: HttpClient) {
    //this.urlApi = environment.urlApi;
  }
}
