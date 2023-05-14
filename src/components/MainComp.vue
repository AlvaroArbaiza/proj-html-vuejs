<script>
import { store } from '../store.js';
import StatsComp from '../components/StatsComp.vue';
import AboutMeComp from '../components/AboutMeComp.vue';

export default {
    name: "MainComp",
    components: {
        StatsComp,
        AboutMeComp
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
</template>


<style lang="scss" scoped>

</style>