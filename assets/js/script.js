// Membuat kelas Game
class Game {
  constructor() {
  }

  // Fungsi ini untuk mengacak pilihan komputer
  randomize() {
    // Menyimpan pilihan ke dalam array
    // Ada 3 element yg bisa diakses mulai dari index-0, index-1, index-2
    const choices = ["rock", "paper", "scissor"];

    // Mengacak angka dari 0-2.9 kemudian bulatkan ke bawah
    // sehingga, hasil akhir hanya berupa angka 0, 1, atau 2
    // hasil ini nantinya bisa digunakkan untuk mengakses array yang memiliki 3 elemen secara acak. 
    const index = Math.floor(Math.random() * 2.9);

    // Akses element yg ada di dalam array choice dengan index hasil acakan
    return choices[index];
  }

  playGame(playerChoice) {
    // Pertama, hapus semua background agak player bisa main berkali kali tanpa harus mengklik reset secara manual
    this.resetBackground();

    // Cetak pilihan player & atur background pada pilihan tsb
    console.log(`Player memilih ${playerChoice}`);
    this.setBackground('player', playerChoice);

    // Cetak pilihan computer & atur background pada pilihan tsb
    const comChoice = this.randomize();
    console.log(`COM memilih ${comChoice}`);
    this.setBackground('com', comChoice);

    // Bandingkan pilihan computer & player
    // Jika sama, panggil fungsi resultDraw()
    // Jika player menang, panggil fungsi resultPlayerWin()
    // Jika player kalah, panggil fungsi resultPlayerLose()
    if (playerChoice == comChoice) {
      return this.resultDraw();
    }

    if (playerChoice === "rock" && comChoice === "paper") {
      return this.resultPlayerLose();
    }

    if (playerChoice === "rock" && comChoice === "scissor") {
      return this.resultPlayerWin();
    }

    if (playerChoice === "paper" && comChoice === "scissor") {
      return this.resultPlayerLose();
    }

    if (playerChoice === "paper" && comChoice === "rock") {
      return this.resultPlayerWin();
    }

    if (playerChoice === "scissor" && comChoice === "rock") {
      return this.resultPlayerLose();
    }

    if (playerChoice === "scissor" && comChoice === "paper") {
      return this.resultPlayerWin();
    }
  }

  setBackground(playerType, choice){
    // Ambil element berdasar id, kemudian berikan kelas custom-selected
    // Cara di bawah bisa dilakukan karena penamaan id menggunakan format jenisplayer-pilihan
    const selectedElement = document.getElementById(`${playerType}-${choice}`);

    // Kelas custom-selected memberikan background, cek .custom-selected di style.css
    selectedElement.classList.add("custom-selected");
  }

  resetBackground() {
    // hapus style background pada pilihan player & computer
    document.getElementById("player-rock").classList.remove("custom-selected");
    document.getElementById("player-paper").classList.remove("custom-selected");
    document.getElementById("player-scissor").classList.remove("custom-selected");
    document.getElementById("com-rock").classList.remove("custom-selected");
    document.getElementById("com-paper").classList.remove("custom-selected");
    document.getElementById("com-scissor").classList.remove("custom-selected");

    // hapus style background pada tulisan VS
    document.getElementById("vs").classList.remove("custom-green-vs-box");
    document.getElementById("vs").classList.remove("custom-green-darker-vs-box");
    
    // atur kembali tulisan menjadi VS & kembalikan style asal
    document.getElementById("vs").innerHTML = "VS";
    document.getElementById("vs").classList.add("custom-vs-text");
  }

  resultDraw() {
    // Cetak tulisan ke console
    console.log("DRAW");
    
    // Ambil element & ubah tulisannya
    const vsElement = document.getElementById("vs");
    vsElement.innerHTML = "DRAW";
    
    // Hapus kelas custom-vs-text & tambahkan kelas custom-green-darker-vs-box
    // Cek kelas custom-vs-text & custom-green-darker-vs-box di style.css
    vsElement.classList.remove("custom-vs-text");
    vsElement.classList.add("custom-green-darker-vs-box");
  }

  resultPlayerLose() {
    // Cetak tulisan ke console
    console.log("COM WIN");

    
    // Ambil element & ubah tulisannya
    const vsElement = document.getElementById("vs");
    vsElement.innerHTML = "COM WIN";

    // Hapus kelas custom-vs-text & tambahkan kelas custom-green-vs-box
    // Cek kelas custom-vs-text & custom-green-vs-box di style.css
    vsElement.classList.remove("custom-vs-text");
    vsElement.classList.add("custom-green-vs-box");
  }

  resultPlayerWin() {
    // Cetak tulisan ke console
    console.log("PLAYER WIN");

    // Ambil element & ubah tulisannya
    const vsElement = document.getElementById("vs");
    vsElement.innerHTML = "PLAYER 1 WIN";

    // Hapus kelas custom-vs-text & tambahkan kelas custom-green-vs-box
    // Cek kelas custom-vs-text & custom-green-vs-box di style.css
    vsElement.classList.remove("custom-vs-text");
    vsElement.classList.add("custom-green-vs-box");
  }
}

// Membuat object baru menggunakan kelas Game
const game = new Game();

// Menyimpan semua elemen yang dibutuhkan ke dalam variable
const playerRock = document.getElementById("player-rock");
const playerPaper = document.getElementById("player-paper");
const playerScissor = document.getElementById("player-scissor");

const comRock = document.getElementById("com-rock");
const comPaper = document.getElementById("com-paper");
const comScissor = document.getElementById("com-scissor");

const versus = document.getElementById("vs");

const reset = document.getElementById("reset");

// Menambahkan fungsi yang dijalankan ketika element di-klik
// isi dari namaElement.onclick harus berupa function
// Jika onlcick dibuat langsung di element dalam dokumen html, tidak perlu berupa function, cukup nama fungsinya yg akan dipanggil saja
playerRock.onclick = function () {
  game.playGame("rock");
}

playerPaper.onclick = function () {
  game.playGame("paper");
}

playerScissor.onclick = function () {
  game.playGame("scissor");
}

reset.onclick = function () {
  // Pencetakan tulisan ini hanya dilakukan ketika mengklik gambar reset
  console.log("--- GAME RESET ---");

  game.resetBackground();
}
