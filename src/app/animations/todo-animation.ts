import {
  trigger,
  transition,
  useAnimation,
  style,
  animate,
  query,
  animateChild,
  group
} from '@angular/animations';
import { fadeInAnimation } from './fade-animation';
import { bounceOutLeftAnimation } from './slide-toggle';

export let todoElementAnimation = trigger('todoElementAnimation', [
  transition(
    ':enter',
    useAnimation(fadeInAnimation, { params: { duration: '0.5s' } })
  ),
  transition(':leave', [
    style({ backgroundColor: 'red' }),
    animate('1s'),
    useAnimation(bounceOutLeftAnimation)
  ])
]);

export let todosAnimation = trigger('todosAnimation', [
  transition(':enter', [
    group([
      query('h1', [style({ transform: 'translateY(-20px)' }), animate('1s')]),
      query('@todoElementAnimation', animateChild())
    ])
  ])
]);
