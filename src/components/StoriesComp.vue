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
            store,
            active: 0
        }
    },
    created() {
        this.autoScroll();
    },
    methods: {

        // funzione per andare avanti con le slides
        next() {

            // l'elemento con this.active diventa false
            store.stories[this.active].show = false;

            // se l'indice corrisponde all'ultimo elemento, diventa 0 e l'elemento diventa true
            if(this.active ===  store.stories.length - 1) {

                this.active = 0;
                store.stories[this.active].show = true

                // altrimenti l'indice somma +1 cambiando l'elemento in true di volta in volta
            } else {

                this.active++;
                store.stories[this.active].show = true;
            }
        },

        // funzione per andare indietro con le slides
        prev() {

            store.stories[this.active].show = false;

            if( this.active == 0) {

                this.active =  store.stories.length - 1;
                store.stories[this.active].show = true;

            } else {

                this.active--;    
                store.stories[this.active].show = true;
            }
        },

        // Funzione per cambiare slide dopo 5 secondi
        autoScroll() {
            this.autoscroll = setInterval( () => {
                this.next()
            }, 5000 );
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

            <!-- next -->
            <div class="icons next" @click="next">
                <i class="fa-solid fa-sort-up"></i>
            </div>

            <!-- slide position -->
            <span>{{ active + 1 }}&#47;4</span>

            <!-- prev -->
            <div class="icons prev" @click="prev">
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
        box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.05);

        // icons
        .icons {
            width: 100%;
            height: 1.5rem;
            line-height: 1.5rem;
            text-align: center;
            cursor: pointer;
            color: $silver-sand;
        }
    }

}

</style>