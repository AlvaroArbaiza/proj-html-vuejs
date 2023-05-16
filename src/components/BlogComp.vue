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
        <span class="title2 big-text">
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

        <!-- all posts -->
        <a href="#" class="all-posts color-green">
            <span>view all posts</span>
        </a>

    </div>

</template>

<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

.container {
    @include widthMargin(70%, 0);

    // title
    .title {
        display: block;
    }

    // big-text
    .title2 {
        display: block;
        font-size: 2.3rem;        
        margin: 0.5rem 0 4rem;
    }

    // articles
    .articles {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
    }

    .all-posts {
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 600;
        margin: 3rem auto;
        display: block;
        text-align: center;
        text-underline-offset: 6px;
    }
}
</style>