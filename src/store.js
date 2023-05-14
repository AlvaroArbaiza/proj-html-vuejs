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
    ],
    courses: [
        {
            image: 'motivation-course-01-480x298.jpg',
            price: [
                '19',
                '.99'
            ],
            title: 'Management Skills: The Science of Leadership',
            lessons: [
                'fa-file-lines',
                '17 lessons'
            ],
            students: [
                'fa-user',
                '50 students'
            ]
        },
        {
            image: 'motivation-course-02-480x298.jpg',
            price: [
                '25',
                '.99'
            ],
            title: 'Body Language Secrets for Entrepreneurs',
            lessons: [
                'fa-file-lines',
                '19 lessons'
            ],
            students: [
                'fa-user',
                '50 students'
            ]
        },
        {
            image: 'motivation-course-03-480x298.jpg',
            price: [
                '20',
                '.00'
            ],
            title: 'Effective Time Management Mastery — Complete Guide',
            lessons: [
                'fa-file-lines',
                '18 lessons'
            ],
            students: [
                'fa-user',
                '50 students'
            ]
        },
        {
            image: 'motivation-course-04-480x298.jpg',
            price: [
                '20',
                '.00'
            ],
            title: 'Productivity Machine — Focus in a Distracted World',
            lessons: [
                'fa-file-lines',
                '5 lessons'
            ],
            students: [
                'fa-user',
                '50 students'
            ]
        },
        {
            image: 'motivation-course-05-480x298.jpg',
            price: [
                '30',
                '.00'
            ],
            title: 'How to Build Confidence in Your Abilities',
            lessons: [
                'fa-file-lines',
                '1 lesson'
            ],
            students: [
                'fa-user',
                '50 students'
            ]
        },
        {
            image: 'motivation-course-06-480x298.jpg',
            price: [
                '30',
                '.00'
            ],
            title: 'How to be Successful: Create A Growth Mindset For Success',
            lessons: [
                'fa-file-lines',
                '3 lessons'
            ],
            students: [
                'fa-user',
                '50 students'
            ]
        }
    ],
    checklist: [
        'Help you understand yourself better',
        'Revealing mature tips',
        'Give the right advice',
        'Fascinating examples of alpha man'
    ],
    books: [
        {
            image: 'product-book-10-400x400.jpg',
            title: 'Real man 4.0 by Maxcoach',
            price: [
                '39',
                '00'
            ],
        },
        {
            image: 'product-book-11-400x400.jpg',
            title: 'Alpha man by Maxcoach',
            price: [
                '29',
                '00'
            ]
        }

    ]
})