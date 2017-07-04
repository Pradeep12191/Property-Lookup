import {
    style,
    state,
    animate,
    trigger,
    transition
} from '@angular/core'
export const SlideIn = trigger('SlideIn', [
    transition(':enter', [
        style({
            transform:'translateX(-100%)'
        }),
        animate(200)
    ])
])

export const SlideOut = trigger('SlideOut', [
    transition(':leave', [
        animate(200, style({
            transform:'translateX(100%)'
        }))
    ])
])

export const SlideUp = trigger('SlideUp', [
    transition(':enter', [
        style({
            transform:'translateY(100%)'
        }),
        animate(200, style({
            transform:'translateY(0%)'
        }))
    ])
])
