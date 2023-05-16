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
    }
}
</script>

<template>
    <div class="container">
        <div class="sub-container">

            <!-- left -->
            <div class="left">
                <!-- address -->
                <div class="address">
        
                    <span class="title-footer">{{ store.address.name }}</span>
                    <ul>
                        <li v-for="(elem, index) in store.address.data" :key="index">                            
                            {{ elem }}                            
                        </li>
                    </ul>        
                </div>

                <!-- socials -->
                <div class="socials">
                    <div>
                        <a href="#" v-for="(elem, index) in store.socials" :key="index">
                            <i :class="elem"></i>
                        </a>
                    </div>
                </div>
            </div>
    
            <!-- right -->
            <div class="right">
                <!-- explore -->
                <div v-for="(elem, index) in store.links" :key="index" 
                    :class="`links ${elem.className}`">
                    <span class="title-footer">{{ elem.name }}</span>
                    <ul>
                        <li v-for="(el, ind) in elem.data" :key="ind">
                            <a href="#">
                                {{ el }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- copyright -->
        <div class="copyright">
            <span>&#169; 2020 Maxcoach. All Rights Reserved</span>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

.container {
    @include widthMargin(100%, 0);
    background-color: $cindet;
    flex-direction: column;
    @include center ('both');
    padding: 3rem 0;

    .copyright {
        margin-top: 1rem;
        font-size: 0.8rem;
        color: $silver-sand;
    }

    .sub-container {
        @include widthMargin(70%, 0);
        @include space ('between');

        // title-footer
        .title-footer {
            display: block;
            font-size: 0.9rem;
            font-weight: 800;
            margin-bottom: 0.2rem;
            color: $white;
        }

        ul {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: 60%;
            font-size: 0.8rem;        
            color: $silver-sand;
        }

        // left side 
        .left{

            // address
            .address {
                line-height: 2rem;
            }

            // socials
            .socials {
                margin-top: 1rem;

                div {
                    display: flex;
                    column-gap: 1.5rem;

                    a {
                        text-decoration: none;
                        color: $silver-sand;
                    }
                }
            }
        }


        // right side
        .right {
            display: flex;
            width: 35%;
            justify-content: space-between;

            // links
            .links {
                line-height: 2rem;       
                
                a {
                    text-decoration: none;
                    color: $silver-sand;
                }
            }
            
            // explore
            .explore {
                width: 14rem;
                margin-right: 2rem;
            }
        }
    }
}
</style>