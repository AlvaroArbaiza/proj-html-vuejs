<script>
import { store } from '../store.js';
import SingleCourseComp from '../components/SingleCourseComp.vue';

export default {
    name: "CoursesComp",
    components: {
        SingleCourseComp
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

        <!-- header -->
        <div class="header-courses">
            <span class="title color-grey">
                begin your journey at maxcoach
            </span>
            <span class="big-text">
                Latest <span class="big-text color-green">Online Courses</span>
            </span>
        </div>

        <!-- main -->
        <div>

            <!-- courses -->
            <div class="courses">
                <SingleCourseComp v-for="(elem, index) in store.courses" :key="index"
                :image="elem.image"
                :title="elem.title"
                :price="elem.price"
                :lessons="elem.lessons"
                :students="elem.students"/>
            </div>

            <!-- button -->
            <button>
                <span>
                    View all courses
                </span>
                <i class="fa-solid fa-arrow-right-long"></i>
            </button>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

.container {
    @include widthMargin ( 70%, 0 );

    // header
    .header-courses {
        @include center ('vertical');
        flex-direction: column;

        .big-text {            
            font-size: 2.7rem;            
            margin: 1rem 0 3.5rem;
        }
    }

    // courses
    .courses {
        @include space ('between');
        flex-wrap: wrap-reverse;
        flex-direction: row-reverse;
        gap: 3rem 1.5rem;
    }

    // button
    button {
        @include button (14rem, 0.8rem, 1.5rem, 0.7rem, 800, $white, $mountain-meadow);
        display: block;
        cursor: pointer;
        margin: 3rem auto;

        span {
            margin-right: 0.3rem;
        }

        &:hover {
                background-color: $violet;
            }
    }
}
</style>