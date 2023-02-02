<script>
export default {
     name: 'MainAbout',
     props: {
        paragraph: String,
        title: String,
        text: String,
    },
};
</script>

<template>

    <main>
        <section id="about">
            <div class="container">
                <div class="row d-flex justify-content-around align-items-center">
                    <div class="col-4">
                        <img src='../../assets/img/about.png'  class="img-fluid" alt="play">
                    </div>
                    <div class="col-6">
                        <div class="d-flex align-items-center mt-4">
                            <img src="../../assets/img/dog-icon.png" id="dog" alt="dog-icon">
                            <p class="ms-2 mt-3 color-text">{{ paragraph }}</p>
                        </div>
                        <h1 class="mb-4">{{ title }}</h1>
                        <p>{{ text }}</p>
                        <p>{{ text }}</p>
                    </div>

                </div>
            </div>
        </section>
    </main>

</template>

<style lang="scss" scoped> 
@use '../../assets/scss/partials/variables' as *;

#about {
    background-image: url('../../assets/img/dog-logo.png');
    background-repeat: no-repeat;
    background-position: right;
    padding-top: 50px;
    background-color: $white;
    height: 560px;
    margin: 0;
}

.color-text {
    color: $black;
    font-weight: 600;
}


#dog {
    width: 26px;
}
</style>
