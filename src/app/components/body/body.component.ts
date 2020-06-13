import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{

    mostrar = true;

    frase: any = {
        mensaje: 'Mensaje cualquiera porque estoy wapo',
        autor: 'yo'
    };

    personajes: string[] = ['SpiderMan', 'Venom', 'Dr. Octopus'];

}
