import { Component } from '@angular/core';

// main component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To Do List';
  todos = [
    {
    label: 'Hit the gym',
    done: false
    },
    {
      label: 'Meet George',
      done: true
    },
    {
      label: 'Buy eggs',
    },
    {
      label: 'Read a book',
      done: false
    },
    {
      label: 'Organize office',
      done: false
    }
  ];
  // add todo item
  addTodo(newTodoLabel: any): void {
    const newTodo = {
      label: newTodoLabel,
      done: false
    };
    this.todos.push(newTodo);
  }
  // delete todo item
  deleteTodo(todo: any): void {
    this.todos = this.todos.filter( item => item.label !== todo.label);
  }
  // change state of check and uncheck
  check(todo: any): void {
    todo.done = !todo.done;
  }
}
