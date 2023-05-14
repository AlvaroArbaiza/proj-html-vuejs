<script>
import { store } from '../store.js';

export default {
    name: "AboutMeComp",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">

        <!-- description -->
        <section id="description">

            <!-- left -->
            <div class="little">

                <!-- title -->
                <span class="title color-green">
                    about me
                </span>

                <!-- text -->
                <span class="big-text">
                    How to Be an Alpha Male: The 15 Habits of True Alphas                    
                </span>
            </div>

            <!-- right -->
            <div class="bigger">

                <!-- question -->
                <p class="question paragraph">
                    Want to learn how to be <span class="color-green">an alpha male</span>&#63; How to be more masculine&#63; How to be the man you've always wanted to be&#63;
                </p>
                <p class="answer color-grey">
                    Your goal is to show the consistency of business, core values, and customer care. Punctuality, responsibility, individuality, accuracy, enthusiasm — you have to clearly explain how these qualities are applicable to your work. And the important thing is you do love what you do.
                </p>
            </div>
        </section>

        <!-- video -->
        <section id="video">

            <!-- left -->
            <div class="bigger">
                <img class="play-img" src="/img/icon-youtube-play.png" alt="youtube play">
                <img src="/img/home-movation-video-poster-670x450.jpg" alt="video poster">
            </div>

            <!-- right -->
            <div class="little">

                <!-- comment -->
                <p class="comment big-text">
                    &#34;Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them.&#34;
                </p>

                <div class="img">
                    <img src="/img/home-movation-shape-01.png" alt="waves">
                </div>

                <!-- author -->
                <span class="author">
                    Kaixa Stark
                </span>

                <!-- sign -->
                <span class="sign color-grey">
                    wingman
                </span>
            </div>
        </section>

    </div>

</template>

<style lang="scss" scoped>
@import '../style/main.scss';
@import '../style/partials/_variables.scss';

.container {
    @include widthMargin ( 70%, 0 );
    margin-bottom: 5rem;

    // description
    #description {
        width: 100%;
        display: flex;
        margin-bottom: 5.5rem;

        // left
        .little {
            flex-basis: 45%;
            @include space ('between');
            flex-direction: column;
            padding-right: 4rem;
            
            .big-text {
                margin-top: 1.3rem;
                font-size: 2.3rem;
                line-height: 3.5rem;
            }
        }

        // right
        .bigger {
            flex-basis: 55%;
            display: flex;
            flex-direction: column;
            justify-content: end;
            padding-left: 2rem;

            .question {
                font-weight: 600;
                margin-bottom: 0.8rem;
            }

            .answer {
                line-height: 1.5rem;
                font-size: 0.9rem;
            }
        }
    }

    // video
    #video {
        width: 100%;
        display: flex;

        .bigger {
            flex-basis: 55%;
            box-shadow: 0px 30px 50px -30px #0000005e;
            position: relative;

            img {
                display: block;
            }

            .play-img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .little {
            flex-basis: 45%;
            @include center ('orizontal');
            flex-direction: column;
            padding: 0 4rem 0 3rem;

            .comment {
                font-size: 1.5rem;
                line-height: 2.5rem;
                margin-bottom: 3rem;
            }

            // author
            .author {
                margin: 1.2rem 0 0.9rem;
                font-weight: 600;
            }

            // sign
            .sign {
                @include title(uppercase, 0.1rem, 0.7rem);
            }
        }
    }

}
</style>