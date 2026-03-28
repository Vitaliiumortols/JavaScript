let dataSet = {};
const rows = 5;
const cols = 5;
let buttons = [];
let moves = 0;
let lastClick = [100, 100];
let level = 0;
let timerId = 0;
let timeForClick = 0;

async function createBoard(changeLevel = true) {

    let board = document.getElementById("board");


    await parseDataset();
    if (changeLevel) {
        levelPicker();
    }
    for (let i = 0; i < rows; i++) {
        buttons[i] = [];
        for (let j = 0; j < cols; j++) {
            const button = document.createElement("button");
            button.row = i;
            button.col = j;
            buttons[i][j] = button;
            button.className = "cell";
            board.appendChild(button);
        }
    }
    setDataset();
    clickReg();
    startTimer();
    targetInfo();
} createBoard();

function setDataset() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const button = buttons[i][j];
            if (dataSet.datasets[level].matrix[i][j] === 1) {
                button.classList.add("active");
            }
        }
    }
}

function clickReg() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let flag = false;
            const button = buttons[i][j];
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                clickNeighbors(i, j);
                checkWin();
                if (lastClick[0] === i && lastClick[1] === j && flag == false) {
                    moves--;
                    flag = true;
                } else {
                    moves++;
                    flag = false;
                }
                lastClick = [i, j];
                gameManager();
            })
        }
    }
}

async function parseDataset() {
    const fileName = "data.json";
    const response = await fetch(fileName);
    dataSet = await response.json();
}

function checkWin() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const button = buttons[i][j];
            if (button.classList.contains("active")) {
                return;
            }
        }
    }
    alert("you win");
    levelPicker();
    newGame();
    moves--;
}

function getNeighbors(r, c) {
    const neighbors = [
        [r + 1, c],
        [r - 1, c],
        [r, c + 1],
        [r, c - 1]
    ];

    return neighbors.filter(([row, col]) =>
        row >= 0 && row < rows && col >= 0 && col < cols
    );
}

function clickNeighbors(r, c) {
    let neighborsList = getNeighbors(r, c);

    for (let i = 0; i < neighborsList.length; i++) {
        let row = neighborsList[i][0];
        let col = neighborsList[i][1];

        buttons[row][col].classList.toggle("active");
    }
}

function gameManager() {
    document.getElementById("moves").textContent = moves;
}

function levelPicker() {
    if(level == 1) {
        level = 0;
    } else if (level == 0) {
        level = 2;
    }  else if (level == 2) {
        level = 1;
    }
}

function newGame() {
    let board = document.getElementById("board");
    board.innerHTML = "";
    buttons = [];
    lastClick = [100, 100];
    createBoard(); 
    moves = 0;
    stopTimer();
    gameManager();
}

function reloadGame() {
    let board = document.getElementById("board");
    board.innerHTML = "";
    buttons = [];
    createBoard(false);
    moves = 0;
    lastClick = [100, 100];
    stopTimer();
    gameManager();
}

function startTimer() {
    clearInterval(timerId);

    timeForClick = 0;
    document.getElementById("timer").textContent = timeForClick;

    timerId = setInterval(() => {
        timeForClick++;
        document.getElementById("timer").textContent = timeForClick;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerId);
}

function targetInfo() {
    let moveFor = dataSet.datasets[level].minimum_steps_to_win;
    document.getElementById("info").textContent = moveFor;
}

const ButtonNewGame = document.getElementById("newGame");
ButtonNewGame.addEventListener("click",() => {
    newGame();
})

const ButtonReload = document.getElementById("reload");
ButtonReload.addEventListener("click",() => {
    reloadGame();
})

