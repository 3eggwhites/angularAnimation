import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';

export let slideToggle = trigger('slideToggle', [
  state('void', style({ transform: 'translateX(-20px)' })),
  transition(':enter, :leave', [animate('0.5s')])
  // adding this comment ina  new branch
]);
