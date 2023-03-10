import { createApp } from 'vue';
import App from './App.vue';
import store from './stores/rootIndex.js';

import './assets/dist/output.css';

/*================================================
============== Generic Components ==============*/
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';

/*=============================================*/

const app = createApp(App);

app.use(store);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.mount('#app');


