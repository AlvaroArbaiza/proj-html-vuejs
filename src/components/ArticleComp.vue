<script>
import { store } from '../store.js';

export default {
    name: "ArticleComp",
    props: {
        title: String,
        image: String,
        date: String,
        text: String
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="article">

        <!-- image -->
        <img :src="`/img/${image}`" :alt="title">

        <!-- date -->
        <div class="date color-grey">
            <i class="fa-regular fa-calendar"></i>
            <span>{{ date }}</span>
        </div>

        <!-- title -->
        <span class="title-article">
            {{ title }}
        </span>

        <!-- text preview -->
        <p class="preview color-grey">
            {{ text }}
        </p>
    </div>

</template>

<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

// article
.article {
    flex-basis: calc(100% / 4 - 1rem);
    display: flex;
    flex-direction: column;

    // image
    img {
        border-radius: 0.5rem;
        margin-bottom: 1.5rem;
    }

    // date
    .date {
        line-height: 1.5rem;

        i {
            margin-right: 0.5rem;
        }

        span {
            font-size: 0.9rem;
        }
    }

    // title
    .title-article {    
        margin: 0.5rem 0 1rem;    
        line-height: 1.7rem;
        font-weight: 600;
        font-size: 1rem;

    }
    
    // text-preview 
    .preview {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 0.9rem;
        line-height: 1.5rem;
    }
}
</style>