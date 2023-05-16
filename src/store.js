import { reactive } from 'vue'

export const store = reactive({
    nav: [
        {
            name: 'Home',
            links: [
                'link',
                'link',
                'link',
                'link',
                'link',
                'link'
            ]
        },
        {
            name: 'Pages',
            links: [
                'link',
                'link',
                'link',
                'link',
                'link'
            ]
        },
        {
            name: 'Course',
            links: [
                'link',
                'link',
                'link',
                'link',
                'link',
                'link'
            ]
        },
        {
            name: 'Features',
            links: [
                'link',
                'link'
            ]
        },
        {
            name: 'Blog',
            links: [
                'link',
                'link',
                'link',
                'link',
                'link',
                'link'
            ]
        },
        {
            name: 'Shop',
            links: [
                'link',
                'link',
                'link'
            ]
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
                '.00'
            ],
        },
        {
            image: 'product-book-11-400x400.jpg',
            title: 'Alpha man by Maxcoach',
            price: [
                '29',
                '.00'
            ]
        }

    ],
    booksIcons: [
        'fa-magnifying-glass',
        'fa-cart-shopping',
        'fa-heart',
        'fa-signal'
    ],
    partners: [
        {
            image: 'client-logo-01-primary.png'
        },
        {
            image: 'client-logo-02-primary.png'
        },
        {
            image: 'client-logo-03-primary.png'
        },
        {
            image: 'client-logo-04-primary.png'
        },
        {
            image: 'client-logo-05-primary.png'
        },
        {
            image: 'client-logo-06-primary.png'
        },
        {
            image: 'client-logo-07-primary.png',
            activated: false
        }
    ],
    stories: [
        {
            image: 'testimonial-avata-01.jpg',
            name: 'Minato Versace',
            profession: 'Fashion Designer',
            text: "I've tried many learning platforms, but this course stands out. It offers the flexibility to learn at my own convenience, delve into topics that genuinely interest me, and progress at a pace that feels comfortable. It's an invaluable resource for self-driven learners.",
            show: true
        },
        {
            image: 'testimonial-avata-02.jpg',
            name: 'Mina Hollace',
            profession: 'Freelancer',
            text: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
            show: false
        },
        {
            image: 'testimonial-avata-03.jpg',
            name: 'Ted Smith',
            profession: 'Bodyguard',
            text: "Taking this course has been a game-changer for me. I now have the freedom to learn at my own pace, explore various subjects from the comprehensive syllabus, and tailor my study schedule to fit my needs. It's truly empowering!",
            show: false
        },
        {
            image: 'testimonial-avata-04.jpg',
            name: 'Johan Wallace',
            profession: 'Web Developer',
            text: "Since I started this course, my learning experience has been exceptional. I appreciate the ability to set my own study rhythm, handpick subjects from a diverse syllabus, and access a user-friendly platform. It's the perfect fit for individuals seeking a personalized and enjoyable learning journey.",
            show: false
        }
    ],
    articles: [
        {
            image: 'motivation-blog-01-480x325.jpg',
            title: 'How to Give Yourself Grace to Start Again',
            date: 'May 13, 2020',
            text: "Forgive yourself for bad nabits you may nave started. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati natus consequuntur, magni similique exercitationem quaerat voluptatibus hic veritatis, iure, distinctio labore? Delectus ullam sequi minus a! Omnis quas vel facere."        
         },
        {
            image: 'motivation-blog-02-480x325.jpg',
            title: '11 Super Useful Tips for Small-Business Owners',
            date: 'May 13, 2020',
            text: 'Being a small-business owner poses a ton of challenges. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati natus consequuntur, magni similique exercitationem quaerat voluptatibus hic veritatis, iure, distinctio labore? Delectus ullam sequi minus a! Omnis quas vel facere.'
        },
        {
            image: 'motivation-blog-03-480x325.jpg',
            title: '5 Vital Lessons in 5 Years of Freelancing',
            date: 'May 13, 2020',
            text: "Being self-employeo and working from home, it's easy to get. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati natus consequuntur, magni similique exercitationem quaerat voluptatibus hic veritatis, iure, distinctio labore? Delectus ullam sequi minus a! Omnis quas vel facere."
        },
        {
            image: 'motivation-blog-04-480x325.jpg',
            title: 'How to Stay True to Your Personal Brand',
            date: 'May 13, 2020',
            text: "When it comes to your business or career, you want amet consectetur adipisicing elit. Obcaecati natus consequuntur, magni similique exercitationem quaerat voluptatibus hic veritatis, iure, distinctio labore? Delectus ullam sequi minus a! Omnis quas vel facere."
        }
    ],
    address: {
        name: 'Address',
        data: [
            '382 NE 191st St # 87394 Miami, FL 33179-3899',
            '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
            'support@maxcoach.com'
        ]            
    },
    links: [
        {
            name: 'Explore',
            className: 'explore',
            data: [
                'Start here',
                'Blog',
                'About us',
                'Success story',
                'Courses',
                'Contact us'
            ] 
        },
        {
            name: 'Information',
            className: 'information',            
            data: [
                'Membership',
                'Purchase guide',
                'Privacy policy',
                'Terms of service'
            ] 
        }
    ]            
})