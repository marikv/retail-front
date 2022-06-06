export default {
  appVersion: `1.041.${process.env.MODE}`,
  apiUrls: {
    '192.168.0.66:1313': '192.168.0.66:1212',
    'retail.creditbox.md': 'retail-php.creditbox.md',
  },
  USER_ROLES: {
    1: 'Admin',
    2: 'Dealer',
    3: 'Executor',
  },
};
