import gsap  from 'gsap'

const tl = gsap.timeline({
    defaults: {
        duration: .5,
    }
})

gsap.from('nav li', {
    duration: .5,
    opacity: 0,
    y: '-20%',
    ease: 'power2.out',
    stagger: .2
});
