// Membuat kelas Game
class Game {
  constructor() {
  }

  randomize() {
    const choices = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * 2.9);

    return choices[index];
  }

  playGame(playerChoice) {
    this.resetBackground();

    console.log(`Player memilih ${playerChoice}`);
    this.setBackground('player', playerChoice);

    const comChoice = this.randomize();
    console.log(`COM memilih ${comChoice}`);
    this.setBackground('com', comChoice);

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
    const selectedElement = document.getElementById(`${playerType}-${choice}`);
    selectedElement.classList.add("custom-selected");
  }

  resetBackground() {
    document.getElementById("player-rock").classList.remove("custom-selected");
    document.getElementById("player-paper").classList.remove("custom-selected");
    document.getElementById("player-scissor").classList.remove("custom-selected");
    document.getElementById("com-rock").classList.remove("custom-selected");
    document.getElementById("com-paper").classList.remove("custom-selected");
    document.getElementById("com-scissor").classList.remove("custom-selected");

    document.getElementById("vs").classList.remove("custom-green-vs-box");
    document.getElementById("vs").classList.remove("custom-green-darker-vs-box");
    
    document.getElementById("vs").innerHTML = "VS";
    document.getElementById("vs").classList.add("custom-vs-text");
  }

  resultDraw() {
    console.log("DRAW");
    
    const vsElement = document.getElementById("vs");
    vsElement.innerHTML = "DRAW";
    
    vsElement.classList.remove("custom-vs-text");
    vsElement.classList.add("custom-green-darker-vs-box");
  }

  resultPlayerLose() {
    console.log("COM WIN");

    const vsElement = document.getElementById("vs");
    vsElement.innerHTML = "COM WIN";

    vsElement.classList.remove("custom-vs");
    vsElement.classList.add("custom-green-vs-box");
  }

  resultPlayerWin() {
    console.log("PLAYER WIN");

    const vsElement = document.getElementById("vs");
    vsElement.innerHTML = "PLAYER 1 WIN";

    vsElement.classList.remove("custom-vs");
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
  console.log("--- GAME RESET ---");

  game.resetBackground();
}
