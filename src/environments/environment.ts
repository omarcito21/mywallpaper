// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FirebaseApp } from "@angular/fire/app";

export const environment = {
  production: false,
  SUPA_BASE: {
  supaBaseUrl:"https://sadcwlbsdvoksqiicvio.supabase.co",
  supaBaseApiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZGN3bGJzZHZva3NxaWljdmlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1ODkyODMsImV4cCI6MjA3NDE2NTI4M30.UizXisSmsqQsflX7QE9zg9u0L8WhJpd2pSFeMqI_cAk",
  },
  FirebaseApp_CONFIG:{
    apiKey: "AIzaSyCu03k_3IZNhXcvciR5zJVPQJrWij70c1I",
  authDomain: "mywallpaper-cc2f3.firebaseapp.com",
  projectId: "mywallpaper-cc2f3",
  storageBucket: "mywallpaper-cc2f3.firebasestorage.app",
  messagingSenderId: "1043720493141",
  appId: "1:1043720493141:web:81999cdd395be76fb79cdc"
},

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
