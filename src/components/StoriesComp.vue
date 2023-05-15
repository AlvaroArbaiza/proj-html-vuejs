<script>
import { store } from '../store.js';
import SingleStorieComp from '../components/SingleStorieComp.vue';


export default {
    name: "StoriesComp",
    components: {
        SingleStorieComp
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

        <!-- stories -->
        <div class="stories">

            <span class="title color-green">real stories</span>

            <SingleStorieComp v-for="(elem, index) in store.stories" :key="index" 
                :name="elem.name"
                :image="elem.image"
                :profession="elem.profession"
                :text="elem.text"
                :show="elem.show"
            />
        </div>

        <!-- image -->
        <div class="image">
            <img src="/img/home-movation-testimonial-image-768x562.jpg" alt="max coach image">
        </div>

    </div>

</template>

<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

.container {
    @include widthMargin ( 100%, 4rem );
    background-color: aliceblue;
    border: 1px solid;
    display: flex;

    // stories
    .stories {
        flex-basis: calc(100% / 2); 
        @include center ('both');
        flex-direction: column;
    }

    // image
    .image {
        flex-basis: calc(100% / 2);

        img {
            display: block;
        }
    }

}

</style>