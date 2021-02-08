import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  //siempre se deben de inicializar los valores 
  @Input() personajes:Personaje[] = [];
  @Input() nuevo: Personaje = {
    nombre : '',
    poder : 0
  }
  // agregar( event: any ){
  agregar(  ){
    if (this.nuevo.nombre.trim().length === 0) { return;}//salte de este metodo (validaciones automaticas)
    
    console.log(this.nuevo);    

    this.personajes.push( this. nuevo )
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
  
}
