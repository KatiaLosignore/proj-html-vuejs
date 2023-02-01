<script>
export default {
     name: 'MainService',
     props: {
        cards: Array
     }
};
</script>

<template>

    <main>
        <section id="service">
            <img src="../../assets/img/dog-logo.png" id="dog-left" alt="dog-logo">
            <div class="container text-center">
                <div class="row justify-content-center align-items-center">
                    <div class="col-4 mb-4">
                        <p class="service">Service</p>
                        <h3>DogMilo Pet Care Services For Your Best Friends.</h3>
                    </div>
                </div>
                <ul class="d-flex justify-content-center">
                    <li v-for='card in cards' :key="card.icon">
                        <img :src="`src/assets/img/${card.icon}`" :alt="card.title">
                        <p class="fw-bold">{{ card.title }}</p>
                        <p>{{ card.text }}</p>
                        <img src="../../assets/img/right.png" id="right" alt="right">
                    </li>
                </ul>
            </div>
            <img src="../../assets/img/dog-logo.png" id="dog-right" alt="dog-logo">
        </section>
    </main>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

#service{
    padding-top: 50px;
    height: 580px;
    background-color: $lightgray;
    position: relative;

    .service {
        color: $grey;
        font-weight: bold;
    }

}

ul li {
    background-color: $orange;
    width: 200px;
    height: 320px;
    border-radius: 150px;
    padding: 20px;
    margin: 0 20px;
    text-align: center;

    p {
        color: $white;
        margin-top: 20px;
    }

    img {
        width: 60px;

    }
    #right {
        margin-top: 25px;
        width: 50px;
        height: 50px;
        background-color: $yellow;
        padding: 10px;
        border-radius: 50%;
    }
}

#dog-left,#dog-right  {
    position: absolute;
    top: 40px;
}

#dog-left {
    left: 0;
}

#dog-right {
   right: 0;
}

</style>
