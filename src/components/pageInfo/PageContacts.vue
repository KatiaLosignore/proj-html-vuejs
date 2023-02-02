<script>
export default {
    name: 'PageContacts',
};
</script>

<template>

    <div class="container">
        <div class="contacts pt-3 d-flex justify-content-center">
            <span><font-awesome-icon icon="fa-solid fa-envelope" /></span>
            <p class="ms-2 me-3">info@example.com</p>
            <span><font-awesome-icon icon="fa-solid fa-phone" /></span>
            <p class="ms-2">+1(817)901 3377</p>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

div {
    color: $orange;

    p {
        color: $white;
        cursor: pointer;
    }
}
</style>
