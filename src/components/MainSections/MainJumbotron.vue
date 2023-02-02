<script>
import AppBottom from './AppBottom.vue';

export default {
    name: 'MainJumbotron',
    components: { AppBottom },
   
    props: {
        title: String,
        text: String,
    },
   

};
</script>

<template>

    <main>
        <section id="jumbotron">
            <img src='../../assets/img/left-arrow.png' id="prev" alt="left">
            <div class="container h-100 d-flex align-items-center">
                <div class="row">
                    <div class="col-8">
                        <h1 class="text-white">{{ title }}</h1>
                        <p class="text-white pb-4 mt-4">{{ text }}</p>
                        <div class="d-flex justify-content-start align-items-center">
                            <app-bottom special="Get Started"></app-bottom>
                            <div class="play rounded-3">
                                <img src='../../assets/img/play.png' alt="play">
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <img src='../../assets/img/next.png' id="next" alt="next">
        </section>

    </main>


</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

#jumbotron {
    background-image: url('../../assets/img/b.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 600px;
    position: relative;
}


.play {
    width: 50px;
    height: 50px;
    background-color: $lightblue;
    cursor: pointer;

    img {
        padding: 9px;
       
    }

}


#prev,
#next {
    width: 70px;
    position: absolute;
    top: 65%;
}

#prev {
    left: 0;
}

#next {
    right: 10px;
}
</style>
