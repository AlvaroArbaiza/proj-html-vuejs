<script>
import { store } from '../store.js';

export default {
    name: "SingleStorieComp",
    props: {
        name: String,
        image: String,
        profession: String,
        text: String,
        show: Boolean
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <div class="storie" v-if="show">

        <!-- text -->
        <p>{{ text }}</p>

        <!-- image -->
        <div class="img">
            <img :src="`/img/${image}`" :alt="name">
        </div>

        <!-- name -->
        <span>{{ name }}</span>

        <!-- profession -->
        <span>&#47;{{ profession }}</span>
    </div>

</template>

<style lang="scss" scoped>
</style>