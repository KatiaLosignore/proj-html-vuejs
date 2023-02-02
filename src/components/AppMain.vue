<script>
import MainJumbotron from './MainSections/MainJumbotron.vue';
import MainAbout from './MainSections/MainAbout.vue';
import MainService from './MainSections/MainService.vue';
import MainChoose from './MainSections/MainChoose.vue';
import MainNews from './MainSections/MainNews.vue';

export default {
     name: 'AppMain',
     components: { MainJumbotron, MainAbout, MainService, MainChoose, MainNews },
     
     props: {
        cards: Array
     },
     methods: {
        OnClick() {
            alert("Attenzione, i parametri inseriti non sono corretti!");   
        },
       
     },
      
};
</script>


<template>
    
    <main-jumbotron title="Welcome to DogMilo Pets" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></main-jumbotron>
    <main-about paragraph="About us" title="Welcome DogMilo Pets" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"></main-about>
    <main-service :cards="cards"></main-service>
    <main-choose text="It is a long established fact that a reader will be distructed by the readable content of a page when looking at its layout."></main-choose>
    <main-news placeholder="Your Email Here" @alert-text="OnClick"></main-news>
</template>


