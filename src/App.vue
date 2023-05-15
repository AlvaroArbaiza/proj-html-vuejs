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

</template>

<style lang="scss">
@import './style/main.scss';
@import './style/partials/_variables.scss';

.big-container { 
    width: 100%;
    background: url('/img/background-pattern-wavify.png');
    background-color: $amour;
}
</style>
