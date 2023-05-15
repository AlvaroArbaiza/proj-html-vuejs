<script>
import { store } from '../store.js';
import StatsComp from '../components/StatsComp.vue';
import AboutMeComp from '../components/AboutMeComp.vue';
import CoursesComp from '../components/CoursesComp.vue';
import BookStoreComp from '../components/BookStoreComp.vue';
import PartnersComp from '../components/PartnersComp.vue';

export default {
    name: "MainComp",
    components: {
        StatsComp,
        AboutMeComp,
        CoursesComp,
        BookStoreComp,
        PartnersComp
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <StatsComp/>
        <AboutMeComp/>
        <CoursesComp/>
        <BookStoreComp/>
        <PartnersComp/>
    </main>
</template>


<style lang="scss" scoped>
main {
    width: 100%;
}
</style>