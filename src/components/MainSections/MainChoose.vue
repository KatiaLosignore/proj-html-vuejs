<script>
export default {
     name: 'MainChoose',
     props: {
        text: String
     }
};
</script>

<template>
    <main>
        <section id="choose">
            <div class="row d-flex justify-content-center">
                <div class="col-4">
                    <img src="../../assets/img/why.png" class="img-fluid" alt="why">
                </div>
                <div class="col-8">
                    <div class="d-flex justify-content-start align-items-start mt-5">
                        <img src="../../assets/img/dog-icon.png" id="dog" alt="dog-icon">
                        <p class="ms-2 mt-3 color-text">Choose Us</p>
                    </div>
                    <h3 class="mt-2 mb-4 fw-semibold">Why Choose Us?</h3> 
                    <div class="d-flex align-items-center col-12">
                        <img src="../../assets/img/w-3.png" class="img-right" alt="w-3">
                        <div>
                            <h4>Safety First</h4>
                            <p>{{ text }}</p>
                        </div>
                    </div>
                    <div class="d-flex col-6 offset-2">
                        <img src="../../assets/img/w-2.png" class="img-right" alt="w-2">
                        <div>
                            <h4>Play Yards</h4>
                            <p>{{ text }}</p>
                        </div>
                    </div>
                    <div class="d-flex col-4 offset-4">
                        <img src="../../assets/img/w-1.png" class="img-right" alt="w-1">
                        <div>
                            <h4>Monitor Your Pets</h4>
                            <p>{{ text }}</p>
                        </div>
                    </div>
                    
                    
  
                </div>    
            
            </div>        
              
          
        </section>
    </main>


</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;


#choose {
    height: 800px;
    background-color: $white;
}

.color-text {
    color: $black;
    font-weight: 600;
}

#dog {
    width: 50px;
    color: $grey;
}
img {
    width: 650px;
   
}
.img-right {
    width: 150px;
    margin-right: 20px;
}


</style>
