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
            <span class="text-uppercase">i'm a wingman</span>
            <p id="big-text">Peace On Earth A Wonderful Wish But No Way</p>
            <p class="lil-text">Success isn't overnight. lt's when everyday you get a little better than the day before. It all adds up.</p>

            <!-- button -->
            <button>
                <span>Get Started For Free</span>
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
                <li>
                    <a href="#">
                        <i class="fa-solid fa-ruler-combined"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa-solid fa-life-ring"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa-solid fa-book"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa-solid fa-cart-shopping"></i>
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

    #text-jumbo {
        flex-basis: 40%;
        @include center('orizontal');
        flex-direction: column;
        row-gap: 2rem;
        padding-right: 2rem;

        .text-uppercase { 
            text-transform: uppercase;
        }

        #big-text {
            font-size: 3rem;
        }

        .lil-text {
            line-height: 1.8rem
        }

        button {
            @include button(14rem, 0.8rem, 1.5rem, 0.7rem, $white, $mountain-meadow);
            cursor: pointer;

            span {                
                font-weight: 800;
                margin-right: 0.7rem;
            }

            &:hover {
                background-color: $violet;
            }
        }
        
    }

    #img-jumbo {
        @include center('orizontal');
        flex-basis: 60%;
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