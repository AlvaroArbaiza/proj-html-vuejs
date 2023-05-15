<script>
import { store } from '../store.js';

export default {
    name: "PartnersComp",
    data() {
        return {
            store
        }
    },
    created() {
    },
    mounted() {
        this.carouselInf()
    },
    methods: {
        carouselInf() {

            const carousel = document.querySelector(".carousel");

            for( let i = 0; i < store.partners.length-1; i++ ) {

                let cloneNode = carousel.children[i].cloneNode(true);

                let image = document.createElement("img");
                
                cloneNode.appendChild(image);
                
                carousel.appendChild(cloneNode);
            }

            console.log(store.partners)
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="carousel">
            <div class="partners" v-for="(elem, index) in store.partners" :key="index">
                
                <img :src="`/img/${elem.image}`" alt="logo partner">
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

.container {
    @include widthMargin ( 70%, 2rem );
    @include center('both');
    height: 200px;
    overflow: hidden;
    position: relative;

    &:before, 
    &:after {
        content: "";
        width: 10rem;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 1;
    }
    &:before {
        left: 0;
        background: linear-gradient(to right, $white 0%, transparent 100%);
    }
    &:after {
        right: 0;
        background: linear-gradient(to left, $white 0%, transparent 100%);
    }

    // carousel
    .carousel {
        display: flex;        
        list-style: none;
        width: 100%;
        animation: scrolling calc(6 * 2s) linear infinite;
     
        @keyframes scrolling {
        0% { transform: translateX(0); }
        100% { transform: translateX( -1 * calc(100% / $elements-displayed) * 7); }
        }

        &:hover {
            animation-play-state: paused;
        }
    
        .partners {
            flex-basis: calc(100% / $elements-displayed);
            aspect-ratio: 1;
            flex-shrink: 0;
            @include center ('both');
            filter: opacity(0.3) grayscale(40%);

            &:hover {
                filter: opacity(1) grayscale(0);
            }
        }
    }

}
</style>