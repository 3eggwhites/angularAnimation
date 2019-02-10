import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';

export let fadeToggle = trigger('fadeToggle', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [animate('1s')])
]);
// added aliases for element entering the dom a
// leaving the dom. void=>* is :enter and *=>void is :leave"
