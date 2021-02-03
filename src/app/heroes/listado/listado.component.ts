import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ["spiderman", "IronMan", "Thor", "Hulk", "Capitan America"];
  // borrado: string | undefined;
  heroeBorrado: string = '';

  borrarHeroe(){
    // this.heroes = [];
    // this.borrado = this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
    
  }
}
