import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  // templateUrl: './app.component.html',
  template: `
    <h1>{{ title }}</h1>
    <h2>Hola mundo desde {{ country }}</h2>
    <app-user />
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-17-app';
  country = 'Peru';
}
