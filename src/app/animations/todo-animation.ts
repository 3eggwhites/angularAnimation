import {
  trigger,
  transition,
  useAnimation,
  style,
  animate
} from '@angular/animations';
import { fadeInAnimation } from './fade-animation';
import { bounceOutLeftAnimation } from './slide-toggle';

export let customTodoAnimation = trigger('todoAnimation', [
  transition(
    ':enter',
    useAnimation(fadeInAnimation, { params: { duration: '0.5s' } })
  ),
  transition(':leave', [
    style({ backgroundColor: 'red' }),
    animate('0.5s'),
    useAnimation(bounceOutLeftAnimation)
  ])
]);
