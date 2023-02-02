<script>
import CardPlace from '../cards/CardPlace.vue';
export default {
    name: 'MainNews',
    components: { CardPlace },
    data() {
        return { term: '' }
    },
    props: {
        placeholder: String,
    },
    emits: ['alert-text'],
    
};
</script>

<template>

    <main>
        <section id="news">
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-3 card-one">
                        <div class="d-flex align-items-center">
                            <img src="../../assets/img/dog-icon.png" id="dog" alt="dog-icon">
                            <p class="ms-2 mb-4">Rewiew & Rating</p>
                        </div>
                        <h5 class="mb-4">Over 8000 Customers With 5-Star Review</h5>
                        <p class="mb-5">It is a long established fact that a reader will be distructed by the readable content of a page when looking at its layout</p>
                        <span><font-awesome-icon icon="fa-solid fa-star" /></span>
                        <span><font-awesome-icon icon="fa-solid fa-star" /></span>
                        <span><font-awesome-icon icon="fa-solid fa-star" /></span>
                        <span><font-awesome-icon icon="fa-solid fa-star" /></span>
                        <span><font-awesome-icon icon="fa-solid fa-star" /></span>
                    </div>
                    <div class="col-3">
                        <card-place></card-place>
                    </div>
                    <div class="col-3">
                        <card-place></card-place>
                    </div>
                </div>
                <div class="arrows text-end mb-5">
                    <img src="../../assets/img/left-arrow.png" class="arrow-left" alt="left">
                    <img src="../../assets/img/next.png" class="arrow-right" alt="left">
                </div>

                <div class="d-flex justify-content-center align-items-center special rounded-3">
                    <div class="image col-5">
                        <img src="../../assets/img/news.png" alt="dogs" id="dogs">
                    </div>
                    <div class="col-6 newsletter">
                        <h3 class="text-white mb-3">Subscribe to Our Newsletter</h3>
                        <div class="input-group mb-3">  
                            <input type="text" class="form-control" v-model.trim="term" :placeholder="placeholder" aria-label="Username">
                            <button class="input-group-text" @click="$emit('alert-text',)">@</button>
    
                        </div>
                    </div>
                </div>

            </div>

        </section>


    </main>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

#news {
    height: 600px;
}

.card-one {
    height: 320px;
    padding: 15px;
}

#dog {
    width: 18px;
    margin-bottom: 18px;
}

span {
    color: $yellow;
}

.arrow-left,
.arrow-right {
    color: $white;
    width: 25px;
    background-color: $orange;
    padding: 4px;
    margin-left: 8px;
    margin-top: 6px;
    cursor: pointer;
    
}

.arrows {
    margin-right: 162px;
}

#dogs {
    width: 320px;
    margin-bottom: 85px;
}

.special {
    background-color: $orange;
    width: 850px;
    height: 190px;
    margin: 150px auto;
    position: relative;
    z-index: 1;
}

h3 {
   font-size: 20px;
}

.input-group-text {
    color: $white;
    font-weight: bold;
    font-size: 20px;
    border: 2px solid $white;
    background-color: $orange;
    cursor: pointer;
}
</style>
