function cetakNama(nama) {
  return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "Nugraha Panca Wibisana",
  umur: 16,
  cetakMhs() {
    return `Halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun`;
  },
};

class orang {
  constructor() {
    console.log("Objek orang telah dibuat!!");
  }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.orang = orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI : PI,
//     mahasiswa : mahasiswa,
//     orang : orang
// };

module.exports = {
  cetakNama,
  PI,
  mahasiswa,
  orang,
};
