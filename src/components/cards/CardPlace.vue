<script>
export default {
     name: 'CardPlace'
};
</script>

<template>

    <main>
        <section id="card">
            <div>  
                <span><font-awesome-icon icon="fa-solid fa-star" /></span>
                <span><font-awesome-icon icon="fa-solid fa-star" /></span>
                <span><font-awesome-icon icon="fa-solid fa-star" /></span>
                <span><font-awesome-icon icon="fa-solid fa-star" /></span>
                <span><font-awesome-icon icon="fa-solid fa-star" /></span>  
                <p class="fw-bold mt-3">Great Place</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
                <div class="d-flex justify-content-start align-items-center">
                    <img src="../../assets/img/t1.png" alt="image">
                    <div>
                        <p class="fw-bold mt-3 mb-1">Tobias May</p>
                        <p class="mt-0">UI/UX Designer</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

 #card {
     background-color: $lightgray;
     width: 300px;
     height: 320px;
     padding: 15px;
     border-radius: 0;
     margin: 0 10px;      
 }
    
    span {
       color: $yellow;
    }

 img {
    width: 55px;
    border-radius: 50%;
    margin-right: 10px;
 }

</style>
