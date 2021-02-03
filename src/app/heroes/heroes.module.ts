import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //que kiero que sea visible fuera de este modulo...
    exports: [
        ListadoComponent
    ],
    // solo van los modulos que se v a importar
    imports:[
        CommonModule //ofrece las directivas entre otras cosas
    ]
})
export class HeroesModule {    }