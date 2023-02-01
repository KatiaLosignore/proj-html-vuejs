<script>
import PageContacts from './pagetop/PageContacts.vue';
import PageSocial from './pagetop/PageSocial.vue';
export default {
     name: 'AppHeader',
     components: { PageContacts, PageSocial },

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
                            <a :href='link.url' v-text="link.text" :class="{ 'active': link.active, 'button' : link.button}"></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>


</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.header-top {
    height: 60px;
    background-color: $green; 
}

.header-bottom {
    padding: 22px 0;
    height: 120px;

    ul {
        padding: 0;

        li {
            list-style-type: none;
            font-weight: bold;
            font-size: 18px;

            a {
                color: $grey;

                &.active {
                    color: $orange;
                }
                &.button {
                    background-color: $orange;
                    border-radius: 30px;
                    width: 200px;
                    padding: 15px;
                    color: $white;
                    text-align: center;
                }
            }
        }
    }
}



</style>
