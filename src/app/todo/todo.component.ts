import { fadeInAnimation } from './../animations/fade-animation';
import { bounceOutLeftAnimation } from './../animations/slide-toggle';
import { Component, OnInit } from '@angular/core';
import { fadeToggle } from '../animations/fade-animation';
import { slideToggle } from '../animations/slide-toggle';
import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes,
  useAnimation
} from '@angular/animations';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    trigger('todoAnimation', [
      transition(
        ':enter',
        useAnimation(fadeInAnimation, { params: { duration: '0.5s' } })
      ),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate('0.5s'),
        useAnimation(bounceOutLeftAnimation)
      ])
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
