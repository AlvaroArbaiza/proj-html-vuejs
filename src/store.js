import { reactive } from 'vue'

export const store = reactive({
    nav: [
        {
            name: 'Home'
        },
        {
            name: 'Pages'
        },
        {
            name: 'Course'
        },
        {
            name: 'Features'
        },
        {
            name: 'Blog'
        },
        {
            name: 'Shop'
        },
    ],
    socials: [
        'fa-brands fa-twitter',
        'fa-brands fa-facebook-f',
        'fa-brands fa-instagram',
        'fa-brands fa-linkedin'
    ],
    sideIcons: [
        'fa-ruler-combined',
        'fa-life-ring',
        'fa-book',
        'fa-cart-shopping'
    ],
    stats: [
        {
            name: 'finished sessions',
            stat: '1.926'
        },
        {
            name: 'satisfaction rate',
            stat: '100%'
        },
        {
            name: 'enrolled learners',
            stat: '3092+'
        },
        {
            name: 'online instructors',
            stat: '200'
        }
    ]
})