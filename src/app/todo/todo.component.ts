import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    trigger('fadeToggle', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('1s')]),
      transition('* => void', [animate('1s')])
    ])
  ]
})
export class TodoComponent implements OnInit {
  todoList: string[];

  constructor() {
    this.todoList = [
      'Things to do 1',
      'Things to do 2',
      'Things to do 3',
      'Things to do 4'
    ];
  }

  addToList(input: HTMLInputElement) {
    if (!(input.value === '')) {
      this.todoList.splice(0, 0, input.value);
    }
  }

  removeItem(item) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }

  ngOnInit() {}
}
