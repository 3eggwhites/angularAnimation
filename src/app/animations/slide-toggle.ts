import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes,
  animation,
  useAnimation
} from '@angular/animations';

export let bounceOutLeftAnimation = animation(
  animate(
    '0.5s 0.1s ease-in',
    keyframes([
      style({
        offset: 0.2,
        opacity: 1,
        transform: 'translateX(20px)'
      }),
      style({
        offset: 1,
        opacity: 0,
        transform: 'translateX(-100%)'
      })
    ])
  )
);

export let slideToggle = trigger('slideToggle', [
  transition(':enter', [
    style({ transform: 'translateX(-20px)' }),
    animate('0.5s 0.1s ease-out')
  ]),
  transition(':leave', useAnimation(bounceOutLeftAnimation))
]);
