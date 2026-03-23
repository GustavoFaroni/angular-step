import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Starwars {
  constructor(private http: HttpClient){}

    apiUrl : string = 'https://swapi.dev/api/people'

    getPeople(){
      return this.http.get(this.apiUrl)

    }
}
