import { createApp } from 'vue'
import './assets/css/style.css'
import 'tailwindcss/tailwind.css';
import App from './App.vue'
import store from "./store";
import router from "./router";

const app = createApp(App);

app.use(store).use(router).mount("#app");
