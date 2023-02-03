<script>
export default {
    name: 'AppBottom',
    props: {
        text: String,
        special: String
    },

};
</script>



<template>

    <button class="button">{{ text }} {{ special }}</button>
    

</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.button {
    background-color: $orange;
    border-color: transparent;
    border-radius: 30px;
    width: 170px;
    padding: 10px;
    font-size: 18px;
    color: $white;
    font-weight: 600;
    text-align: center;
    margin-right: 8px;
}

.button:hover {
    background-color: $blue;
}
</style>
