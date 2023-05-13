<script>
import { store } from './store.js';
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
    name: "App",
    components: {
        HeaderComp,
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
    <header>
        <HeaderComp/>
    </header>
</template>

<style lang="scss">

</style>
