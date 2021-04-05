function drawBoard() {
  let board = document.querySelector(".board");
  let block;
  let flag = true; // белая-черная клетка

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (j == 0) flag = !flag;

      block = document.createElement("div");

      if (flag) block.className = "block black";
      else block.className = "block white";

      //вывелa
      board.appendChild(block);

      //поменялa с черного на белое
      flag = !flag;
    }
  }
}

drawBoard();
