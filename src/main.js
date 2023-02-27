import { createApp } from 'vue';
import App from './App.vue';
import store from './stores/rootIndex.js';

import './assets/dist/output.css';

/*================================================
============== Generic Components ==============*/
import BaseButton from './components/ui/BaseButton.vue';

/*=============================================*/

const app = createApp(App);

app.use(store);

app.component('base-button', BaseButton);

app.mount('#app');


