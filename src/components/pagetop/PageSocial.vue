<script>
export default {
    name: 'PageSocial',
};
</script>

<template>

    <div class="container">
        <div class="socials">
            <span class="facebook"><font-awesome-icon icon="fa-brands fa-square-facebook" /></span>
            <span><font-awesome-icon icon="fa-brands fa-square-pinterest" /></span>
            <span class="twitter"><font-awesome-icon icon="fa-brands fa-square-twitter" /></span>
            <span class="linkedin"><font-awesome-icon icon="fa-brands fa-linkedin" /></span>
            <span class="instagram"><font-awesome-icon icon="fa-brands fa-square-instagram" /></span>
            
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

span {
    margin: 0 2px;
    font-size: 20px;
}



</style>
