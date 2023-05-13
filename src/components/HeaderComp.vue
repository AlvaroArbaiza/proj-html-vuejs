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
        <img src="/img/dark-logo.png" alt="logo">
    </div>

    <!-- navbar -->
    <nav>
        <ul>
            <li v-for="(elem, index) in store.nav" :key="index">
                <a href="#">
                    <span>{{ elem.name }}</span>
                    <i class="fa-solid fa-angle-down"></i>
                </a>
            </li>               
        </ul>
    </nav>

    <!-- socials -->
    <div id="socials">
        <div>
            <i v-for="(elem, index) in store.socials" :key="index" :class="elem"></i>
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

            li {

                a {
                    text-decoration: none;
                    color: $cindet;

                    i {
                        margin-left: 0.3rem;
                        vertical-align: middle;
                        font-size: 0.7rem;
                    }
                }
            }
        }
    }

    // socials
    #socials {

        div {
            @include space('between');
            column-gap: 1.5rem
        }
    }

}

</style>