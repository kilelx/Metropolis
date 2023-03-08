// import gsap  from 'gsap'

const tl = gsap.timeline({
    defaults: {
        duration: .5,
    }
});

tl
    .from('nav li', {
        duration: .5,
        opacity: 0,
        y: '-20%',
        ease: 'power2.out',
        stagger: .2
    })
    .from('.hero--title span', {
        y: '100%',
        transform: 'rotate(10deg)',
        stagger: .2
    },
    "<50%"
    )
    .to('.gallery img', {
        'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: .6,
        stagger: .2
    },
    "<50%"
    )