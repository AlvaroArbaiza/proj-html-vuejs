<script>
import { store } from '../store.js';

export default {
    name: "SingleCourseComp",
    props: {
        title: String,
        image: String,
        price: String,
        lessons: String,
        students: Number
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="card">
        <!-- image -->
        <img :src="`/img/${image}`" :alt="title">

        <!-- body -->
        <div class="body-card">

            <!-- price -->
            <span class="price color-green">
                <span class="big-num">&#36;{{ price[0] }}</span>{{ price[1] }}
            </span>

            <!-- title -->
            <span class="title-card color-violet">
                {{ title }}
            </span>

            <!-- description -->
            <div class="descpt color-grey">
                <div class="info lessons">
                    <i :class="`fa-regular ${lessons[0]}`"></i>
                    <span>{{ lessons[1] }}</span>
                </div>
                <div class="info students">
                    <i :class="`fa-regular ${students[0]}`"></i>
                    <span>{{ students[1] }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

.card {
    width: calc(100% / 3 - 1rem);

    // body
    .body-card {
        display: flex;
        flex-direction: column;
        padding: 1rem 1.3rem;

        // price
        .price {
            font-size: 0.9rem;
            font-weight: 600;

            .big-num {
                font-size: 1.3rem;
            }
        }

        // title
        .title-card {
            font-weight: 600;
            line-height: 1.5rem;
            margin: 0.5rem 0 1.8rem;
        }

        // description
        .descpt {
            display: flex;
            font-size: 0.8rem;

            .info {
                
                i {
                    margin-right: 0.5rem;
                }
            }

            .lessons {
                margin-right: 2rem;
            }
        }
    }
}
</style>