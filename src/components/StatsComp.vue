<script>
import { store } from '../store.js';

export default {
    name: "StatsComp",
    data() {
        return {
            store
        }
    },
    created() {
        this.stats()
    },
    methods: {
        // Funzione per cambiare le stats dopo 3 secondi
        stats(){
            setInterval( () => {

                store.stats.forEach( (elem, index) => {
                
                if ( elem.name == 'finished sessions' ) {

                    let num = elem.stat.split('.')

                    num[1] = parseInt(num[1]) + 2

                    let nom = num.join(".")

                    elem.stat = nom

                } else if ( elem.name == 'enrolled learners' ) {
                    
                    let num = elem.stat.split('+')

                    num[0] = parseInt(num[0]) + 4

                    let nom = num.join("+")

                    elem.stat = nom
                }
            })
            }, 3000 );
        }
    //     stats() {
            
    //         store.stats.forEach( (elem, index) => {
                
    //             if ( elem.name == 'finished sessions' ) {

    //                 let num = elem.stat.split('.')

    //                 num[1] = parseInt(num[1]) + 2

    //                 let nom = num.join(".")

    //                 elem.stat = nom

    //             } else if ( elem.name == 'enrolled learners' ) {
                    
    //                 let num = elem.stat.split('+')

    //                 num[0] = parseInt(num[0]) + 4

    //                 let nom = num.join("+")

    //                 elem.stat = nom
    //             }
    //         })
    //     }
    }
}
</script>

<template>
    <div class="container">

        <!-- stats -->
        <div v-for="(elem, index) in store.stats" :key="index">
            <img class="img1" src="/img/background-pattern-grid-line-06.png" alt="background line">
            <img class="img2" src="/img/background-pattern-grid-line-06.png" alt="background line">
            
            <span class="stat color-green">{{ elem.stat }}</span>
            <span class="title">{{ elem.name }}</span>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

.container {
    @include widthMargin ( 70%, 0 );
    @include space('around');
    height: 300px;
    align-items: center;

    div {
        @include center('both');
        flex-direction: column;
        width: calc(100% / 4);
        position: relative;
        height: 30%;

        img {
            position: absolute;
        }

        .img1 {
            top: 0;
            left: 0;
        }

        .img2 {
            top: 0;
            left: 1px;
            transform: rotate(180deg);
        }

        // stat
        .stat {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 600;
        }
    }

}

</style>