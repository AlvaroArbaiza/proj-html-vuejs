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
    ]
})