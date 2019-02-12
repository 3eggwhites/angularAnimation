import {
  trigger,
  state,
  transition,
  style,
  animate,
  animation,
  useAnimation
} from '@angular/animations';

export let fadeInAnimation = animation(
  [style({ opacity: 0 }), animate('{{ duration }} {{ easing}}')],
  {
    params: {
      duration: '1s',
      easing: 'ease-out'
    }
  }
);

export let fadeOutAnimation = animation(
  [animate('{{ duration }} {{ easing }}', style({ opacity: 1 }))],
  {
    params: {
      duration: '1s',
      easing: 'ease-in'
    }
  }
);

export let fadeToggle = trigger('fadeToggle', [
  transition(':enter', useAnimation(fadeInAnimation)),
  transition(':leave', useAnimation(fadeOutAnimation))
]);
// added aliases for element entering the dom a
// leaving the dom. void=>* is :enter and *=>void is :leave"
