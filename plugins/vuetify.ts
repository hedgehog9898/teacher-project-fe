import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify, type ThemeDefinition } from 'vuetify';

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#060813',
    surface: '#060813',
    primary: '#060813',
    secondary: '#0E0E27',
    accent: '#A36AFF',
    error: '#FF79A7',
    info: '#5E9EFF',
    success: '#61FF5E',
    warning: '#FFAC5E',
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: false,
    theme: {
      defaultTheme: 'lightTheme',
      themes: {
        lightTheme
      }
    }
  });
  app.vueApp.use(vuetify);
});