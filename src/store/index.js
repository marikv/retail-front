import { store } from 'quasar/wrappers';
import { createStore } from 'vuex';

import auth from './auth';
import dealers from './dealers';
import bids from './bids';
import users from './users';
import payments from './payments';
import settingsTypeCredits from './settings-type-credits';
import settingsProducts from './settings-products';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const Store = createStore({
    modules: {
      auth,
      dealers,
      bids,
      users,
      payments,
      settingsTypeCredits,
      settingsProducts,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
