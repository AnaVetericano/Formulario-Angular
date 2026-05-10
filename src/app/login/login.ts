import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email:string="";
  password:string="";
  iniciarSesion(){
    console.log("Correo: "+this.email);
    console.log("Password: "+this.password);
  }
}
