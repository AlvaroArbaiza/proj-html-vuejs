<script>
import { store } from '../store.js';
import StatsComp from '../components/StatsComp.vue';

export default {
    name: "MainComp",
    components: {
        StatsComp
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
</template>


<style lang="scss" scoped>

</style>