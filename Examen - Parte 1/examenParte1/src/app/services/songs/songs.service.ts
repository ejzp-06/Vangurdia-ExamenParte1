import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SongsService {

  API_URL = "API"

  getSongs(){
    return this.http.get(`${this.API_URL}/ruta`);
  } 

  constructor(public http: HttpClient) { }
}
