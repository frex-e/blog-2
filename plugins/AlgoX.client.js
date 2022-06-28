import * as algoX from "algorithmx";
import {defineNuxtPlugin} from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(algoX);
})