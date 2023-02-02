<script>
import PageContacts from './pageInfo/PageContacts.vue';
import PageSocial from './pageInfo/PageSocial.vue';
export default {
     name: 'AppFooter',
     components: { PageContacts, PageSocial},

     props: {
        menus: Array
     },
};
</script>

<template>

     <main>
          <section id="informations">
               <div class="container">
                    <div class="footer-nav d-flex">
                         <div class="footer-col d-flex justify-content-center" v-for="menu in menus" :key="menu.title">
                              <div>
                                   <h4>{{ menu.title }}</h4>
                                   <ul>
                                        <li v-for="link in menu.links" :key="link.text">
                                             <a :href="link.url">{{ link.request }} {{ link.text }}</a>
                                        </li>
                                        <li class="mt-4" v-for="link in menu.links">
                                             <page-social v-if="link.active"></page-social>
                                        </li>     
                                   </ul>
                              </div>
                              
                         </div>
                         <div class="footer-col d-flex justify-content-center">
                              <div>
                                   <h5 class="me-4">Contact me</h5>
                                   <div>
                                        <div class="d-flex justify-content-start">
                                             <span class="mt-2"><font-awesome-icon icon="fa-solid fa-location-arrow" /></span>
                                             <p class="text-white ms-2">
                                                  <a href="#">4500 Mercantile plaza, suite 300,fort worth,TX,76137,USA</a>
                                             </p>
                                        </div>
                                        <div class="d-flex justify-content-start">
                                             <span class="mt-2"><font-awesome-icon icon="fa-solid fa-phone" /></span>
                                             <p><a href="#" class="ms-2">+1(817)901 3377</a></p> 
                                        </div>
                                        <div class="d-flex justify-content-start">
                                             <span class="mt-2"><font-awesome-icon icon="fa-solid fa-envelope" /></span>
                                             <p><a href="#" class="ms-2">info@example.com</a></p>
                                        </div>
                                   </div>
                              </div>
                         </div>


                    </div>
               </div>
               <hr>
               <p class="text-white text-center fw-semibold mt-4">Copyright 2022 by AttdogMilo.com</p>
          </section>
     </main>
 
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#informations {
     height: 508px;
     padding-top: 150px;
     background-color: $black; 

     .footer-nav {
          margin: 0 auto;
          width: 90%;
     }

          .footer-col {
               flex-basis: calc(100% / 5);
               padding: 0 5px;
          }


               h4 {
                    font-weight: 600;
                    font-size: 21px;
                    margin-bottom: 20px;
                    text-align: start;
                    color: $orange;
                    margin-left: 38px;
               }
               
                    a {
                         color: $white;
                         display: inline-block;
                         font-size: 15px;
                    }

}


div {
    color: $orange;

}

hr {
     border-color: $white;
}

</style>
