import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  nuevo:Personaje = {
    nombre:'Maestro Roshi',
    poder: 1000
  }

  // cambiarNombre( event:any ){
    // console.log(event)
    // }
    
  agregarNuevoPersonaje( argumento: Personaje ){
    console.log(argumento);
    this.personajes.push(argumento)
    
  }
}