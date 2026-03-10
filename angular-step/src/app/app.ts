import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  numero: number = 1523;
  data: string = '2024-07-08';
  valorMercadoria: number = 180.25
}
