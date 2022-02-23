import { boot } from 'quasar/wrappers';
import axios from 'axios';
import { Dialog } from 'quasar';
import config from '../config';

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

if (!window.location.origin) {
  Dialog.create({
    title: 'Atenție',
    message: 'Eroare de accesare window.location.origin',
    color: 'negative',
  });
}
let baseURL = String(window.location.origin);// 'https://api.example.com'
Object.keys(config.apiUrls).forEach((k) => {
  baseURL = baseURL.replace(k, config.apiUrls[k]);
});
// console.log(baseURL);
if (!baseURL) {
  Dialog.create({
    title: 'Atenție',
    message: 'Eroare de accesare baseURL',
    color: 'negative',
  });
}

const api = axios.create({ baseURL: `${baseURL}/api` });
// const token = myStorage.get('token');
// api.defaults.headers.common.Authorization = `Bearer ${token}`;

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
