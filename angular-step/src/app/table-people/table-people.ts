import { Component, OnInit } from '@angular/core';
import { Starwars } from '../starwars';

export interface PeriodicElement {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
}


@Component({
  selector: 'app-table-people',
  standalone: false,
  templateUrl: './table-people.html',
  styleUrl: './table-people.css',
})
export class TablePeople implements OnInit {
  displayedColumns: string[] = ['name', 'height', 'mass', 'hair_color'];
  dataSource = [];

  constructor(private starWarsService: Starwars ) {}

  ngOnInit()  {
    this.mostrarDados()
  }

  mostrarDados() {
    return this.starWarsService.getPeople().subscribe((data: any) => {
      this.dataSource = data.results;
    });}
}
