import { Component, signal } from '@angular/core';
import { Formulario } from './formulario/formulario';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [Formulario, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
