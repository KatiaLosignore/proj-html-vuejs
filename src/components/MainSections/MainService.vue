<script>
export default {
     name: 'MainService'
};
</script>

<template>

    <main>
        <section id="service">
            <img src="../../assets/img/dog-logo.png" class="pt-4" alt="dog-logo">
            <div class="container">

            </div>
            <img src="../../assets/img/dog-logo.png" id="dog" alt="dog-logo">
        </section>
    </main>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

#service{
    height: 480px;
    background-color: $lightgray;
    position: relative;
}

#dog {
   position: absolute;
   right: 0;
   top: 40px;
}

</style>
