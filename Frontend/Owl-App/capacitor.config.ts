import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.owl.owlapp',
  appName: 'Owl-App',  
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  cordova:{}
};

export default config;
