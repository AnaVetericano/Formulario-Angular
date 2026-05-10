import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  codigo: string = '';
  nombre: string = '';
  precio: string = '' ;
  guardar(){
    console.log('nombre producto:'+this.nombre);
    console.log('precio producto:'+this.precio);
    console.log('codigo producto:'+this.codigo);

  }
  cancelar(){

  }
}
