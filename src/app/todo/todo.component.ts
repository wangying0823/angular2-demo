import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  id: number = 0;
	desc: string = '';
  constructor(private service: TodoService) { }

  ngOnInit() {
  }
  addTodo(){
  	//this.service.addTodo(this.desc).then(todo => {
  		this.todos = [...this.todos, {id: this.id, desc: this.desc, completed: false}];
  		this.desc='';
  	//})
  }
  toggleTodo(todo: Todo){
    const i = this.todos.indexOf(todo);
    this.todos[i].completed = !this.todos[i].completed;
  	//this.service.toggleTodo(todo).then(t => {
      this.todos = [...this.todos.slice(0,i),this.todos[i],...this.todos.slice(i+1)];
  	//})
  }
  removeTodo(todo: Todo){
    const i = this.todos.indexOf(todo);
  	//this.service.deleteTodoById(todo.id).then(() => {
  		 this.todos = [
        ...this.todos.slice(0,i),
        ...this.todos.slice(i+1)
      ];
  	//})
  }
}
