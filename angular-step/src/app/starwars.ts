import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Starwars {
  constructor(private http: HttpClient){}

    apiUrl : string = ''

    getPeople(){
      return this.http.get('https://swapi.dev/api/people')

    }
}
