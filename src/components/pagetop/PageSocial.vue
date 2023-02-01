<script>
export default {
    name: 'PageSocial',
};
</script>

<template>

    <div class="container">
        <div class="socials">
            <span id="facebook"><font-awesome-icon icon="fa-brands fa-square-facebook" /></span>
            <span id="pinterest"><font-awesome-icon icon="fa-brands fa-square-pinterest" /></span>
            <span id="twitter"><font-awesome-icon icon="fa-brands fa-square-twitter" /></span>
            <span id="linkedin"><font-awesome-icon icon="fa-brands fa-linkedin" /></span>
            <span id="instagram"><font-awesome-icon icon="fa-brands fa-square-instagram" /></span>
            
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

span {
    margin: 0 2px;
    font-size: 18px;
    cursor: pointer;
}

#facebook, #pinterest, #twitter, #linkedin, #instagram {
    color: $white;
    padding: 0 5px;
    border-radius: 7px;
}

#facebook {
    background-color: $darkblue;
}
#pinterest {
    background-color: $fuchsia;
}
#twitter {
    background-color: $heavenly;
}
#linkedin {
    background-color: $blue;
}
#instagram {
    background-color: $violet;
}



</style>
