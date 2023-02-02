import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faPhone, faStar, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faSquareTwitter, faLinkedin, faSquareInstagram, faSquarePinterest  } from '@fortawesome/free-brands-svg-icons';


library.add( faEnvelope, faPhone, faSquareFacebook, faSquareTwitter, faLinkedin, faSquareInstagram, faSquarePinterest, faStar, faLocationArrow );


import App from './App.vue';

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');


