import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes
} from '@angular/animations';

export let slideToggle = trigger('slideToggle', [
  transition(':leave', [animate('0.5s 0.1s ease-in',
   keyframes([
    style({
      offset: .2,
      opacity: 1,
      transform: 'translateX(20px)' }),
      style({
        offset: 1,
        opacity: 0,
        transform: 'translateX(-100%)' })
  ])
  )]),
  transition(':enter', [animate('0.5s 0.1s ease-out')])
]);
