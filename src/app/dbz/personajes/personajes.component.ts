import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //con input van a venir desde el componente padre
  // @Input('data') personajes:Personaje[] = [];

  get personajes(){
    return this.DbzService.personajes;
  }

  constructor ( private DbzService: DbzService ){}

}
