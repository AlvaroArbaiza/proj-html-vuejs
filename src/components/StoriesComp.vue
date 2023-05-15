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

        <!-- box ( prev - next ) -->
        <div class="box">

            <div class="icons next">
                <i class="fa-solid fa-sort-up"></i>
            </div>
            <span>1&#47;4</span>
            <div class="icons prev">
                <i class="fa-solid fa-sort-down"></i>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

.container {
    @include widthMargin ( 100%, 4rem );
    display: flex;
    position: relative;

    // stories
    .stories {
        flex-basis: calc(100% / 2); 
        @include center ('both');
        flex-direction: column;
        background: url('/img/background-pattern-wavify.png');
        background-color: $amour;
    }

    // image
    .image {
        flex-basis: calc(100% / 2);

        img {
            display: block;
        }
    }

    // box
    .box {
        @include center ('both');
        flex-direction: column;
        width: 5rem;
        aspect-ratio: 1;
        background-color: $white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);

        .icons {
            width: 100%;
            height: 1.5rem;
            line-height: 1.5rem;
            text-align: center;
            color: $silver-sand;
        }
    }

}

</style>