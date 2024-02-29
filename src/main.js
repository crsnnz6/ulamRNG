import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import Swal from "sweetalert2";

import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);

app.config.globalProperties.$swal = Swal;

app.use(router);

app.mount("#app");
