import {gsap}  from 'gsap'

gsap.from('nav li', {
    duration: .5,
    opacity: 0,
    y: '-20%',
    ease: 'power2.out',
    stagger: .2
});
