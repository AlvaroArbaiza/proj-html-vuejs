<script>
import { store } from '../store.js';

export default {
    name: "FooterComp",
    data() {
        return {
            store
        }
    },
    created() {
        console.log(store.footer);
    }
}
</script>

<template>
    <div class="container">

        <!-- address ( left ) -->
        <div class="address">


        </div>

        <!-- right -->
        <div>
            <!-- explore -->
            <div class="explore">

            </div>

            <!-- information -->
            <div class="information">

            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

.container {
    @include widthMargin(100%, 0);
    height: 500px;
    background-color: cadetblue;

}
</style>