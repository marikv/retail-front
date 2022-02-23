import {
  Loading,
  Notify,
  date,
} from 'quasar';
import { api } from 'boot/axios';

export const BID_STATUS_NEW = 0;
export const BID_STATUS_IN_WORK = 1;
export const BID_STATUS_APPROVED = 2;
export const BID_STATUS_REFUSED = 3;
export const getBidStatusName = (n) => {
  const BID_STATUS = {};
  BID_STATUS[BID_STATUS_NEW] = 'Cerere nouă';
  BID_STATUS[BID_STATUS_IN_WORK] = 'Cerere în lucru';
  BID_STATUS[BID_STATUS_APPROVED] = 'Cerere aprobată';
  BID_STATUS[BID_STATUS_REFUSED] = 'Cerere refuzată';
  return BID_STATUS[n];
};

export const USER_ROLE_ADMIN = 1;
export const USER_ROLE_DEALER = 2;
export const USER_ROLE_EXECUTOR = 3;
export const getRoleName = (n) => {
  const USER_ROLE = {};
  USER_ROLE[USER_ROLE_ADMIN] = 'Administrator';
  USER_ROLE[USER_ROLE_DEALER] = 'Dealer';
  USER_ROLE[USER_ROLE_EXECUTOR] = 'Executor';
  return USER_ROLE[n];
};

export const zeroLeftPad = (num, size = 4) => {
  if (String(num).length > size) {
    size = String(num).length;
  }
  const s = `000000000000${num}`;
  return s.substr(s.length - size);
};

export const baseURL = String(api.defaults.baseURL).replace('/api', '/');

export const strToDate = (dateStr, formatStr) => date.extractDate(dateStr, formatStr);
export const dateFormat = (dateObj, formatStr) => date.formatDate(dateObj, formatStr);
export const dateToDot = (dateStr) => dateFormat(strToDate(dateStr, 'YYYY-MM-DD'), 'DD.MM.YYYY');
export const dateToLine = (dateStr) => dateFormat(strToDate(dateStr, 'DD.MM.YYYY'), 'YYYY-MM-DD');

export const calendarLocaleRo = {
  currentYear: new Date().getFullYear(),
  days: ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
  daysShort: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
  daysVeryShort: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  months: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
  monthsShort: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec'],
  firstDayOfWeek: 1,
};

export const showLoading = (message = 'Așteptați') => {
  Loading.show({
    message,
    // spinner: QSpinnerGears,
  });
};
export const hideLoading = () => {
  Loading.hide();
};

export const showNotify = (params = {}, error) => {
  if (Object.keys(params).length === 0) {
    if (error && error.response && error.response.data) {
      params.timeout = 15000;
      params.actions = [{ icon: 'close', color: 'white' }];
      if (error.response.data.message && error.response.data.message.indexOf(' Duplicate entry ') > -1) {
        params.message = 'Acest item deja există în baza de date';
      } else if (error.response.data.data && error.response.data.data.message) {
        params.message = `Eroare: ${error.response.data.data.message}`;
      }
    }
  }

  const defaultParams = {
    icon: params.icon !== undefined ? params.icon : 'warning',
    position: params.position || 'top',
    timeout: params.timeout || 10000,
    progress: params.progress !== undefined ? params.progress : true,
    color: params.color || 'red-14',
    html: params.html || false,
    multiLine: params.multiLine || false,
    textColor: params.textColor || 'white',
    message: params.message || 'Eroare de conexiune',
    actions: params.actions || [{ icon: 'close', color: 'white' }],
  };
  Notify.create(defaultParams);
};

export const getMiniPhotoFromServer = (str) => {
  let str2 = String(str)
    .replace('.png', '_mini.png')
    .replace('.PNG', '_mini.PNG')
    .replace('.gif', '_mini.gif')
    .replace('.GIF', '_mini.GIF')
    .replace('.bmp', '_mini.bmp')
    .replace('.BMP', '_mini.BMP')
    .replace('.jpg', '_mini.jpg')
    .replace('.JPG', '_mini.JPG')
    .replace('.svg', '_mini.svg')
    .replace('.SVG', '_mini.SVG')
    .replace('.jpeg', '_mini.jpeg')
    .replace('.JPEG', '_mini.JPEG');
  if (str2 && str2.length && str2[0] && str2[0] === '/') {
    str2 = str2.substring(1);
  }
  return str2;
};

export const getInitials = (str) => {
  if (!str) {
    return '-';
  }
  const f = str.substr(0, 1);
  let s = str.length > 1 ? str[1] : '';
  const expl = str.split(' ');
  if (expl.length > 1) {
    s = expl[1].substr(0, 1);
  }
  return `${f}${s}`;
};
export const generateColorFromString = (str) => {
  if (!str) {
    return '#000000';
  }
  let i;
  let hash = 0;
  for (i = 0; i < str.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (i = 0; i < 3; i += 1) {
    // eslint-disable-next-line no-bitwise
    const value = (hash >> (i * 8)) & 0xFF;
    const str2 = `00${value.toString(16)}`;
    colour += str2.substring(2);
  }
  return colour;
};

export const getEntityName = (op) => {
  let name = op;
  if (op === 'users') {
    name = 'Utilizatori';
  } else if (op === 'departments') {
    name = 'Departamente';
  } else if (op === 'dealers') {
    name = 'Dileri';
  } else if (op === 'cash') {
    name = 'Casa';
  } else if (op === 'cashes') {
    name = 'Касса';
  } else if (op === 'clients') {
    name = 'Beneficiari';
  } else if (op === 'settings') {
    name = 'Settings';
  }
  return name;
};

export const isValidEmail = (val) => {
  const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  if (!val) {
    return true;
  }
  return emailPattern.test(val) || 'adresa de email incorectă';
};

export const downloadPDF = (id, link = '/print/contract', name = 'contract') => {
  if (id) {
    const url = `${link}/${id}`;
    showLoading();
    api({
      url,
      method: 'GET',
      // mode: 'cors',
      // referrerPolicy: 'no-referrer-when-downgrade',
      responseType: 'blob', // important
    })
      .then((response) => {
        hideLoading();
        // eslint-disable-next-line no-shadow
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const linkA = document.createElement('a');
        linkA.href = url;
        linkA.setAttribute('download', `${name}_${id}.pdf`);
        document.body.appendChild(linkA);
        linkA.click();
      })
      .catch((err) => {
        hideLoading();
        showNotify({}, err);
      });
  } else {
    showNotify({});
  }
};

export const stripTags = (html) => {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText;
};

export const str = (v) => (v ? String(v) : '');

export const youtubeUrlParser = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : false;
};

// export const isAdmin = (store) => {
//   const currentUser = store.getters['auth/getUser'];
//   let isAdminVar = false;
//   if (currentUser && currentUser.roles && currentUser.roles.length > 0) {
//     currentUser.roles.forEach((role) => {
//       if (role.name === 'Admin') {
//         isAdminVar = true;
//       }
//     });
//   }
//   return isAdminVar;
// };
//
// export const userRole = (store) => {
//   const currentUser = store.getters['auth/getUser'];
//   let role = '';
//   if (currentUser && currentUser.roles && currentUser.roles.length > 0) {
//     currentUser.roles.forEach((role2) => {
//       role = role2.name;
//     });
//   }
//   return role;
// };

export const cyrb53 = (strVar, seed = 0) => {
  // eslint-disable-next-line no-bitwise
  let h1 = 0xdeadbeef ^ seed;
  // eslint-disable-next-line no-bitwise
  let h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < strVar.length; i += 1) {
    ch = strVar.charCodeAt(i);
    // eslint-disable-next-line no-bitwise
    h1 = Math.imul(h1 ^ ch, 2654435761);
    // eslint-disable-next-line no-bitwise
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  // eslint-disable-next-line no-bitwise
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);

  // eslint-disable-next-line no-bitwise
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  // eslint-disable-next-line no-bitwise
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

export const hashCode = (strVar) => {
  let hash = 0;
  let i;
  let chr;
  if (strVar.length === 0) return hash;
  for (i = 0; i < strVar.length; i += 1) {
    chr = strVar.charCodeAt(i);
    // eslint-disable-next-line no-bitwise
    hash = ((hash << 5) - hash) + chr;
    // eslint-disable-next-line no-bitwise
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

export const toLowerWithoutDiacritics = (s) => {
  let r = s.toLowerCase();
  r = r.replace(new RegExp(/[àáâãäåă]/g), 'a');
  r = r.replace(new RegExp(/æ/g), 'ae');
  r = r.replace(new RegExp(/ç/g), 'c');
  r = r.replace(new RegExp(/[èéêë]/g), 'e');
  r = r.replace(new RegExp(/[ìíîï]/g), 'i');
  r = r.replace(new RegExp(/ñ/g), 'n');
  r = r.replace(new RegExp(/[òóôõö]/g), 'o');
  r = r.replace(new RegExp(/œ/g), 'oe');
  r = r.replace(new RegExp(/[ùúûü]/g), 'u');
  r = r.replace(new RegExp(/[ýÿ]/g), 'y');
  r = r.replace(new RegExp(/[ș]/g), 's');
  r = r.replace(new RegExp(/[ț]/g), 't');
  return r;
};

export const fileToBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

// eslint-disable-next-line max-len
export const base64ImageResize = (base64Str, maxWidth = 400, maxHeight = 350) => new Promise((resolve) => {
  const img = new Image();
  img.src = base64Str;
  img.onload = () => {
    const canvas = document.createElement('canvas');
    const MAX_WIDTH = maxWidth;
    const MAX_HEIGHT = maxHeight;
    let { width } = img;
    let { height } = img;

    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
    } else if (height > MAX_HEIGHT) {
      width *= MAX_HEIGHT / height;
      height = MAX_HEIGHT;
    }
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    resolve(canvas.toDataURL());
  };
});

export const myStorage = {
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: (key) => {
    if (key in localStorage) {
      const value = localStorage.getItem(key);
      if (!value) {
        return value;
      }
      return JSON.parse(value);
    }
    return null;
  },
};
