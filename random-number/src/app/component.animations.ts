import {
  keyframes,
  trigger,
  query,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

const optional = { optional: true };

export const fader = trigger('RouterAnimation', [
  transition('* => *', [
    query(
      ':enter, :leave',
      [
        style({
          opacity: 0,
          transform: 'translateX(-150%)',
          position: 'absolute',
        }),
      ],
      optional
    ),
    query(
      ':enter-active, :leave-active',
      [
        animate(
          '700ms',
          style({
            opacity: 0.5,
            transform: 'translateX(-75%)',
            position: 'absolute',
          })
        ),
      ],
      optional
    ),
    query(
      ':enter',
      [
        animate(
          '700ms',
          style({
            position: 'absolute',
            opacity: 1,
            transform: 'translateX(0%)',
          })
        ),
      ],
      optional
    ),
  ]),
]);
