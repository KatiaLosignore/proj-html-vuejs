<script>
export default {
    name: 'MainJumbotron',
    props: {
        title: String,
        text: String,
    },

};
</script>

<template>

    <main id="dog">
        <section id="jumbotron">
            <img src='../../assets/img/left-arrow.png' id="prev" alt="left">
            <div class="container h-100 d-flex align-items-center">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <h1 class="text-white">{{ title }}</h1>
                        <p class="text-white pb-3">{{ text }}</p>
                        <div class="d-flex justify-content-center align-items-center">
                            <a href="#" class="button fw-bold me-3">Get Started</a>
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

.button {
    background-color: $orange;
    border-radius: 30px;
    width: 200px;
    padding: 17px 35px;
    color: $white;
    text-align: center;
}

.play {
    width: 55px;
    height: 50px;
    background-color: $lightblue;

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
