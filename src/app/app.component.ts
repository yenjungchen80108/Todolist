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
      done: false
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
  addTodo(newTodoLabel) {
    var newTodo = {
      label: newTodoLabel,
      done: false
    };
    this.todos.push(newTodo);
  }
  // delete todo item
  deleteTodo(todo) {
    this.todos = this.todos.filter( item => item.label !== todo.label);
  }
  // change state of check and uncheck
  check(todo) {
    todo.done = !todo.done;
  }
}
