import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  //siempre se deben de inicializar los valores 
  
  @Input() nuevo: Personaje = {
    nombre : '',
    poder : 0
  }

  //emintir un tipo de dao generico
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  // agregar( event: any ){
  agregar(  ){
    if (this.nuevo.nombre.trim().length === 0) { return;}//salte de este metodo (validaciones automaticas)
    
    // console.log(this.nuevo);        
    this.onNuevoPersonaje.emit( this.nuevo );
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
  
}
