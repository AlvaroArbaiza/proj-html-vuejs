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

            for( let i = 0; i < store.partners.length; i++ ) {

                let cloneNode = carousel.children[i].cloneNode(true);

                let image = document.createElement("img");
                
                cloneNode.appendChild(image);
                
                carousel.appendChild(cloneNode);
            }

            console.log(carousel)
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
    @include widthMargin ( 70%, 0 );
    @include center('both');
    height: 200px;
    overflow: hidden;

    .carousel {
        display: flex;        
        list-style: none;
        width: 100%;
        animation: scrolling 15s linear infinite;
     
        @keyframes scrolling {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-100% / 6) * 8); }
        }
    
        .partners {
            flex-basis: calc(100% / 6);
            aspect-ratio: 1;
            flex-shrink: 0;
            @include center ('both');
        }
    }

}
</style>