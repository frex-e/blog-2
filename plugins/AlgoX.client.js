import * as algoNext from '@/components/algoNext';
import * as algoX from 'algorithmx';

import {defineNuxtPlugin} from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.use(algoX);
  nuxtApp.vueApp.use(algoNext).use(algoX);
})