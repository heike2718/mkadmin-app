// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: '1.0.0',
  envName: 'DEV',
  apiUrl: 'http://localhost:9400/mkadmin-server',
  authApiUrl: 'http://localhost:9000',
  authUrl: 'http://localhost:4300',
  assetsUrl: 'assets',
  consoleLogActive: true,
  serverLogActive: true,
  loglevel: 2
};

/*
 * For easier debugging in development mode, you can import the following file to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact on performance if an error is
 * thrown.
 */
// import 'zone.js/dist/zone-error'; // Included with Angular CLI.
