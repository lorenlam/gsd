import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

  removeItem() {
    this.remove.emit(this.item);
  }

}