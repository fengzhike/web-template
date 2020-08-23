/**
 * @file index.js
 */

function importAll (r) {
    r.keys().forEach(r);
}
  
importAll(require.context('./', false, /\.svg$/));
