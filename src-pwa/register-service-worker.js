import { register } from 'register-service-worker';
import { Dialog, Loading, QSpinnerGears } from 'quasar';
import config from 'src/config';

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready(registration) {
    // eslint-disable-next-line no-console
    console.log('Service worker is active.', registration);
  },

  registered(registration) {
    // eslint-disable-next-line no-console
    console.log('Service worker has been registered.', registration);
  },

  cached(registration) {
    // eslint-disable-next-line no-console
    console.log('Content has been cached for offline use.', registration);
  },

  updatefound(registration) {
    // eslint-disable-next-line no-console
    console.log('New content is downloading. updatefound', registration);
    Dialog.create({
      title: 'Atenție!',
      message: `A fost instalată o versiune mai nouă a aplicației (${config.appVersion}). Doriți să încărcați versiunea nouă?`,
      persistent: true,
      ok: {
        label: 'DA, încarcă',
        flat: false,
        size: 'lg',
      },
      cancel: {
        label: 'Închide',
        flat: true,
        size: 'lg',
      },
    }).onOk(() => {
      if ('serviceWorker' in navigator) {
        caches.keys().then((cacheNames) => {
          cacheNames.forEach((cacheName) => {
            caches.delete(cacheName);
          });
        });
      }
      Loading.show({
        spinner: QSpinnerGears,
        // other props
      });
      setTimeout(() => {
        window.location.reload(true);
      }, 10000);
    }).onCancel(() => {
      // console.log('>>>> Cancel')
    });
  },

  updated(registration) {
    // eslint-disable-next-line no-console
    console.log('New content is available; please refresh. updated', registration);
  },

  offline() {
    // console.log('No internet connection found. App is running in offline mode.')
  },

  error(err) {
    // eslint-disable-next-line no-console
    console.error('Error during service worker registration:', err);
  },
});
