<script>
import { store } from './store.js';
import HeaderComp from './components/HeaderComp.vue';
import JumboComp from './components/JumboComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
    name: "App",
    components: {
        HeaderComp,
        JumboComp,
        MainComp,
        FooterComp
    },
    data() {
        return {
            store
        };
    }
}
</script>

<template>

<div class="big-container">
    
    <!-- header -->
    <HeaderComp/>

    <!-- jumbotron -->
    <JumboComp/>
</div>

<MainComp/>

<FooterComp/>

<!-- back to top page -->
<div class="backToTop">
    <a href="#logo">
        <i class="fa-solid fa-arrow-up"></i>
    </a>
</div>

</template>

<style lang="scss">
@import './style/main.scss';
@import './style/partials/_variables.scss';

.big-container { 
    width: 100%;
    background: url('/img/background-pattern-wavify.png');
    background-color: $amour;
}

.backToTop {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    width: 3rem;
    aspect-ratio: 1;
    background-color: $mountain-meadow;
    border-radius: 50%;
    text-align: center;
    line-height: 3rem;

    a {
        display: block;
        width: 100%;
        aspect-ratio: 1;
        text-decoration: none;
        color: $white;
    }
}
</style>
