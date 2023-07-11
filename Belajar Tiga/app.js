// Core module
// File system

const fs = require("fs");

// Menuliskan string ke file (synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Hello world secara synchronous!');
// } catch(e) {
//     console.log(e);
// };

// menuliskan string ke file (asynchronous)
// fs.writeFile('data/test.txt', 'Hello world secara asynchronous', (err) => {
//     console.log(err);
// });

// Membaca isi file (synchronous)
// const data = fs.readFileSync('test.txt', 'utf-8');

// console.log(data);

// Membaca isi file (asynchronous)
// fs.readFile('data/test.txt',  'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Readline
const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan nama anda : ", (nama) => {
  rl.question("Masukan no HP anda : ", (noHP) => {
    const contact = {nama, noHP};
    const file = fs.readFileSync('data/contact.json', 'utf8');
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync('data/contact.json', JSON.stringify(contacts));

    console.log(`Terimakasih ${nama} sudah memasukan data`);

    rl.close();
  });
});
