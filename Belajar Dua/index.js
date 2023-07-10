// console.log(window);
// window object
// is the global scope in JavaScript, it contains all built-in functions and variables that are available to
// every other part of a web page or application

// const fs = require('fs'); // Core module
// const cetakNama = require('./coba.js'); // Local module
// const moment = require('moment'); // Thir party module / npm module / node_module
const coba = require("./coba");

console.log(
  coba.cetakNama("Wibisana"),
  coba.PI,
  coba.mahasiswa.cetakMhs(),
  new coba.orang()
);
