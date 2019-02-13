import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';

export let zippyAnimation = trigger('zippyToggle', [
  state(
    'collapsed',
    style({
      height: 0,
      overflow: 'hidden',
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    })
  ),
  state(
    'expanded',
    style({
      height: '*',
      overflow: 'auto'
    })
  ),
  transition('collapsed => expanded', [
    animate(
      '0.3s ease-in',
      style({
        height: '*',
        overflow: 'auto',
        paddingTop: '*',
        paddingBottom: '*'
      })
    ),
    animate(
      '1s',
      style({
        opacity: 1
      })
    )
  ]),
  transition('expanded => collapsed', [animate('0.5s ease-in')])
]);
