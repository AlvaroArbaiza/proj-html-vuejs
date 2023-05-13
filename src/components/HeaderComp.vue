<script>
import { store } from '../store.js';

export default {
    name: "HeaderComp",
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <div>

        <!-- logo -->
        <div>
            <img src="/img/dark-logo.png" alt="logo">
        </div>
    
        <!-- navbar -->
        <nav>
            <ul>
                <li v-for="(elem, index) in store.nav">
                    <a href="#">
                        <span>{{ elem.name }}</span>
                        <i class="fa-solid fa-angle-down"></i>
                    </a>
                </li>
               
            </ul>
        </nav>
    </div>

</template>


<style lang="scss" scoped>

</style>