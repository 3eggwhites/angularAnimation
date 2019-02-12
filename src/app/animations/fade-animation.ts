import {
  trigger,
  state,
  transition,
  style,
  animate,
  animation,
  useAnimation
} from '@angular/animations';

export let fadeInAnimation = animation([style({ opacity: 0 }), animate('1s')]);

export let fadeOutAnimation = animation([animate('1s', style({ opacity: 1 }))]);

export let fadeToggle = trigger('fadeToggle', [
  transition(':enter', useAnimation(fadeInAnimation)),
  transition(':leave', useAnimation(fadeOutAnimation))
]);
// added aliases for element entering the dom a
// leaving the dom. void=>* is :enter and *=>void is :leave"
