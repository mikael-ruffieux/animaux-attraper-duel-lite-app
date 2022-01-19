import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
    selector: '[backButton]'
})
export class BackButtonDirective {
    constructor(private location: Location) { }

    @HostListener('click')
    onClick() {
        console.log("BACKFLIP!");
        this.location.back();
    }
}