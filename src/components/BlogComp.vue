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

        <!-- articles -->
        <div class="articles">
            <ArticleComp v-for="(elem, index) in store.articles" :key="index" 
                :image="elem.image"
                :title="elem.title"
                :date="elem.date"
                :text="elem.text"/>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

.container {
    @include widthMargin(70%, 0);
    height: 500px;
    border: 1px solid black;

    .articles {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;

    }

}

</style>