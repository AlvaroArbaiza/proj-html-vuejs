<script>
import { store } from '../store.js';

export default {
    name: "HeaderComp",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
<div class="container">

    <!-- logo -->
    <div id="logo">
        <a href="#">
            <img src="/img/dark-logo.png" alt="logo">
        </a>
    </div>

    <!-- navbar -->
    <nav>
        <ul>
            <li class="menu" v-for="(elem, index) in store.nav" :key="index">
                <a href="#" class="color-violet">
                    <span>{{ elem.name }}</span>
                    <i class="fa-solid fa-angle-down"></i>
                </a>
                <ul class="dropdown">
                    <li v-for="(el, ind) in elem.links" :key="ind">
                        <a href="#">{{ el }}</a>
                    </li>
                </ul>
            </li>               
        </ul>
    </nav>

    <!-- socials -->
    <div class="socials">
        <div>
            <a href="#" v-for="(elem, index) in store.socials" :key="index">
                <i :class="elem"></i>
            </a>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';
    
.container {
    @include space('between');
    @include widthMargin ( 70%, 0 );
    height: 3.7rem;
    align-items: center;

    // logo
    #logo {
        max-width: 9rem;
        min-width: 7rem;
    }

    // navbar
    nav {
        
        ul {
            @include space('between');
            list-style-type: none;
            column-gap: 2rem;

            .menu {
                position: relative;

                a {
                    text-decoration: none;

                    i {
                        margin-left: 0.3rem;
                        vertical-align: middle;
                        font-size: 0.7rem;
                    }
                }

                .dropdown {
                    display: none;
                    position: absolute;
                    background-color: $white;
                    min-width: 6rem;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 1;
                    flex-direction: column;
                    text-align: center;

                    li {
                        padding: 0.5rem 1rem;
                        
                        &:hover {
                            background-color: $athens-gray;
                        }
                    }
                }

                &:hover .dropdown {
                    display: flex
                }
            }
        }
    }

    // socials
    .socials {

        div {
            @include space('between');
            column-gap: 1.5rem;

            a {
                text-decoration: none;
                color: $cindet;
            }
        }
    }

}

</style>