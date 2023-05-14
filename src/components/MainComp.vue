<script>
import { store } from '../store.js';
import StatsComp from '../components/StatsComp.vue';
import AboutMeComp from '../components/AboutMeComp.vue';
import CoursesComp from '../components/CoursesComp.vue';

export default {
    name: "MainComp",
    components: {
        StatsComp,
        AboutMeComp,
        CoursesComp
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
</template>


<style lang="scss" scoped>

</style>