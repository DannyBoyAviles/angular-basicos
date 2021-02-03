import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ titulo }}</h1>
    <h3>La base es: <strong>{{ base }}</strong></h3>
    <button (click)="acumular(base)"> Acumular +{{ base }} </button>
    <button (click)="sumar()"> +1 </button>
    <span>{{ numero }}</span>
    <button (click)="numero = numero -1"> -1 </button>
    <button (click)="acumular(-base)"> Acumular -{{ base }} </button>
    `
})
export class ContadorComponent {
    titulo: string = 'Hola esta es una variable desde TypeScript';
    numero: number = 10;
    base: number = 5;
  
    sumar(){
      this.numero += 1;
    }
    acumular( valor:number ){
      this.numero += valor;
    }
}