import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GamesComponent],
  template: `
    <h3>Juegos</h3>
    <ul>
      @for (game of games; track game.id) {
      <li>{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username: string = '';

  games = [
    { id: 1, name: 'Game 1' },
    { id: 2, name: 'Game 2' },
    { id: 3, name: 'Game 3' },
  ];
}
