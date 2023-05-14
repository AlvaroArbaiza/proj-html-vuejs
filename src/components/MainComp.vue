<script>
import { store } from '../store.js';
import StatsComp from '../components/StatsComp.vue';
import AboutMeComp from '../components/AboutMeComp.vue';
import CoursesComp from '../components/CoursesComp.vue';
import BookStoreComp from '../components/BookStoreComp.vue';

export default {
    name: "MainComp",
    components: {
        StatsComp,
        AboutMeComp,
        CoursesComp,
        BookStoreComp
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <StatsComp/>
    <AboutMeComp/>
    <CoursesComp/>
    <BookStoreComp/>
</template>


<style lang="scss" scoped>

</style>