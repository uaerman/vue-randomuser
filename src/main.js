import {createApp} from "vue";
import App from "./app.vue";
import router from "./router";

//bulma css
import 'bulma/css/bulma.css'
//bootstrap
import 'bootstrap/scss/bootstrap.scss'
import "bootstrap/dist/css/bootstrap.min.css"

//font awsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowTurnUp)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount("#app");
