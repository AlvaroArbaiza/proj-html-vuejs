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
        <span class="name">{{ name }}</span>

        <!-- profession -->
        <span class=" profession color-grey">&#47; {{ profession }}</span>
    </div>

</template>

<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

// storie
.storie {
    @include center ('vertical');
    flex-direction: column;
    text-align: center;
    padding: 2rem 7rem;

    // text
    p {
        font-size: 1.2rem;
        line-height: 2rem;
        margin-bottom: 2.5rem;
    }

    // image
    .img {
        width: 20%;
        
        img {
            display: block;
            border-radius: 50%;
        }
    }

    // name
    .name {
        margin: 1.5rem 0 1rem;
    }

    // profession 
    .profession {
        font-size: 0.8rem;
    }
}
</style>