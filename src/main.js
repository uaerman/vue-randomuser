import {createApp} from "vue";
import App from "./app.vue";
import router from "./router";
import 'bulma/css/bulma.css'
import 'bootstrap/scss/bootstrap.scss'
import "bootstrap/dist/css/bootstrap.min.css"

createApp(App).use(router).mount("#app");
