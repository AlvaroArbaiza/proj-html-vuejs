<script>
import { store } from '../store.js';

export default {
    name: "JumboComp",
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <div class="container">

        <!-- text -->
        <div id="text-jumbo">
            <span class="title">
                i'm a wingman
            </span>
            <p class="big-text">
                Peace On Earth A Wonderful Wish But No Way
            </p>
            <p class="paragraph color-grey">
                Success isn't overnight. lt's when everyday you get a little better than the day before. It all adds up.
            </p>

            <!-- button -->
            <button>
                <span>
                    Get Started For Free
                </span>
                <i class="fa-solid fa-arrow-right-long"></i>
            </button>
        </div>

        <!-- image -->
        <div id="img-jumbo">
            <img src="/img/home-movation-hero-image.png" alt="foto primo piano del consulente">
        </div>

        <!-- side icons -->
        <div id="side-icons">
            <ul>
                <li v-for="(elem, index) in store.sideIcons" :key="index">
                    <a href="#">
                        <i :class="`fa-solid ${elem}`"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

.container {
    @include widthMargin ( 70%, 0 );
    @include space('between');
    height: 550px;
    margin-top: 2rem;
    position: relative;

    // text
    #text-jumbo {
        flex-basis: 45%;
        @include center('orizontal');
        flex-direction: column;
        row-gap: 2rem;
        padding-right: 4.5rem;

        .big-text {
            font-size: 3rem;
        }

        // button
        button {
            @include button (14rem, 0.8rem, 1.5rem, 0.7rem, 800, $white, $mountain-meadow);
            cursor: pointer;

            span {                
                margin-right: 0.7rem;
            }

            &:hover {
                background-color: $violet;
            }
        }
        
    }

    // image
    #img-jumbo {
        @include center('orizontal');
        flex-basis: 55%;
        background: url("/img/home-movation-shape-face.png") 150px 165px no-repeat;
        background-size: 75%, contain;

        img {
            max-height: 100%;
        }
    }

    // side-icons
    #side-icons {
        position: fixed;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        box-shadow: -3px 0px 12px 1px #0000001a;
        background-color: $white;
        
        ul {
            @include center('vertical');
            flex-direction: column;
            list-style: none;

            li {
                width: 2rem;
                aspect-ratio: 1;
                text-align: center;
                line-height: 2rem;

                a {
                    text-decoration: none;
                    color: $cindet;
                }
            }
        }
    }
}
</style>