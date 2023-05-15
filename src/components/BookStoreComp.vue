<script>
import { store } from '../store.js';

export default {
    name: "BookStoreComp",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">

        <!-- book store online -->
        <div class="bookStore">

            <!-- title -->
            <span class="title">
                book store online
            </span>

            <!-- big-text -->
            <span class="big-text color-violet">
                Be Alpha With <span class="big-text color-green">Wingman's Book</span>
            </span>

            <!-- list -->
            <ul>
                <li v-for="(elem, index) in store.checklist" :key="index">
                    <i class="fa-solid fa-check color-green"></i>
                    {{ elem }}
                </li>
            </ul>

            <!-- button -->
            <button>
                <span>
                    Get Free Ebook
                </span>
            </button>
        </div>

        <!-- books -->
        <div class="books">
            <div class="book" v-for="(elem, index) in store.books" :key="index">              

                <!-- image -->  
                <div class="img">

                    <!-- icons -->
                    <div class="icons">
                        <div class="icon" v-for="(elem, index) in store.booksIcons" :key="index">
                            <i :class="`fa-solid ${elem}`"></i>
                        </div>
                    </div>

                    <img :src="`/img/${elem.image}`" :alt="elem.title">       
                </div>              

                <!-- title -->
                <span class="book-title color-violet">
                    {{ elem.title }}
                </span>

                <!-- price -->
                <span class="price color-green">
                    <span class="big-num">&#36;{{ elem.price[0] }}</span>{{ elem.price[1] }}
                </span>
            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

.container {
    @include widthMargin ( 70%, 5rem );
    display: flex;

    .bookStore {
        width: 30%;
        display: flex;
        flex-direction: column;

        .big-text {
            margin: 1rem 0 1.5rem;
            font-size: 2.3rem;
            line-height: 3.5rem;
        }

        ul {
            list-style: none;
            margin-bottom: 2rem;

            li {
                line-height: 2rem;

                i {
                    margin-right: 0.5rem;
                }
            }
        }

        button {
            @include button (12rem, 0.8rem, 1.5rem, 0.7rem, 800, $white, $mountain-meadow);
            cursor: pointer;

            &:hover {
                background-color: $violet;
            }
        }
    }

    // books
    .books {
        width: 70%;
        display: flex;
        justify-content: flex-start;
        flex-direction: row-reverse;
        column-gap: 1.5rem;
        text-align: center;

        // book
        .book {
            display: flex;
            flex-direction: column;
            flex-basis: calc(80% / 2);

            // image
            .img {
                position: relative;

                .icons {
                    position: absolute;
                    right: 40px;
                    top: 50%;
                    transform: translateY(-50%);
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    transition: all 0.3s ease-in-out;

                    .icon {
                        width: 0;
                        height: 0;
                        text-align: center;
                        line-height: 2rem;
                        border-radius: 50%;
                        font-size: 0;
                        background-color: $white;
                        cursor: pointer;
                        transition: all 0.2s linear;

                        &:hover {
                            transform: scale(1.5);
                        }
                    }

                }
                
                &:hover .icon {
                    width: 2rem;
                    height: 2rem;
                    font-size: 1rem;
                }
            }

            // title
            .book-title {
                margin: 1.5rem 0 0.8rem;
                font-weight: 600;
            }

            // price
            .price {
                font-size: 0.9rem;
                font-weight: 600;
    
                .big-num {
                    font-size: 1.3rem;
                }
            }
        }

    }
}
</style>