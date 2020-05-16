import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

// When it talks about app.component.html PUT IT HERE
// <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
// Welcome to {{ title }}!

@Component({
  selector: 'app-root',
  template: `
  <h1 class="app-title">
    {{ title }}
  </h1>

  <app-list-manager></app-list-manager>

  <ul>
    <li *ngFor="let todoItem of todoList">
      <app-todo-item [item]="todoItem"></app-todo-item>
    </li>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get Shit Done.';
}