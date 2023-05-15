<script>
import { store } from '../store.js';
import ArticleComp from '../components/ArticleComp.vue';

export default {
    name: "BlogComp",
    components: {
        ArticleComp
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">

        <!-- title -->
        <span class="title">
            blog updated
        </span>

        <!-- big text -->
        <span class="big-text">
            Interesting <span class="big-text color-green">articles updated</span> daily
        </span>

    </div>

</template>

<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

.container {
    @include widthMargin(70%, 0);
    height: 500px;
    background-color: antiquewhite;
    border: 1px solid black;

}

</style>