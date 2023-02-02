<script>
import PageContacts from './pageInfo/PageContacts.vue';
import PageSocial from './pageInfo/PageSocial.vue';
import AppBottom from './MainSections/AppBottom.vue'
export default {
     name: 'AppHeader',
     components: { PageContacts, PageSocial, AppBottom },

     props: {
        links: Array
     }
};
</script>

<template>
        <header class="header-top">
            <div class="container d-flex justify-content-between align-items-center">
                <div class="header-top-left">
                    <page-contacts></page-contacts>
                </div>
                <div class="header-top-right">
                    <page-social></page-social>
                </div>
            </div>
        </header>
        <header class="header-bottom">
            <div class="container">
                <nav class="d-flex justify-content-between align-items-center">
                    <a href="#"><img src="../assets/img/logo.png" alt="logo"></a>
                    <ul class="d-flex justify-content-center align-items-center">
                        <li v-for='link in links' :key="link.text">
                            <a :href='link.url' v-text="link.text" :class="{ 'active': link.active }"></a>
                        </li>
                        <li><app-bottom text="Get in Toch!"></app-bottom></li>
                        
                    </ul>
                </nav>
            </div>
        </header>


</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.header-top {
    height: 60px;
    background-color: $black; 
}

.header-bottom {
    padding: 22px 0;
    height: 120px;

    ul {
        padding: 0;

        li {
            font-weight: bold;
            font-size: 18px;

            a {
                color: $grey;

                &.active {
                    color: $orange;
                }
               
            }
        }
    }
}



</style>
