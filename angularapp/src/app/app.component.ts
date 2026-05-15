import { Component } from "@angular/core";
import { RouterOutlet,RouterLink } from "@angular/router";
@Component(
    {
        selector: 'app-root',
        standalone:true,
        imports:[RouterLink,RouterOutlet],
        templateUrl: './app.component.html'
       
    }
)
export class AppComponent{
}