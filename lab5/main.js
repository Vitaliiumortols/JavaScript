(
    () => {
        let gameMode = false;
        let score = 1;
        let timeForClick;
        let timerTime;
        let timerId;
        let boxSize;
        let radius;

        const button = document.getElementById("button");
        button.addEventListener("click", function () {
            startGame();
        })

        const box = document.getElementById("box");
        box.addEventListener("click", function () {
            if (!gameMode) return;
            score++;
            round();
        })

        document.addEventListener("click", function (event) {
            if (!gameMode) return;

            if (event.target !== box && gameMode) {
                score--;
                if (score < 0) gameOver();
                gameManager();
            }
        });

        function startGame() {
            const lvl = document.getElementById("level").value;
            if(lvl !== "chooseOption") {
                gameMode = true;
                document.getElementById("startMenu").style.display = "none";
                document.getElementById("game").style.display = "block";
                level();
                round();
            }
        }

        function round() {
            gameManager();
            spawnPixel();
            timer();
        }

        function level() {
            const selectedLevel = document.getElementById("level").value;
            if (selectedLevel === "easy") {
                boxSize = 70;
                radius = 300;
                timerTime = 4;
            } 
            else if (selectedLevel === "normal") {
                boxSize = 50;
                radius = Math.min(window.innerWidth, window.innerHeight) / 2 - boxSize;
                timerTime = 2;
            } 
            else if (selectedLevel === "hard") {
                boxSize = 20;
                timerTime = 1;
            }
        }

        function spawnPixel() {
            const selectedSkin= document.getElementById("skin").value;
            const selectedLevel = document.getElementById("level").value;
        
            box.style.backgroundImage = `url('./${selectedSkin}.jpeg')`;
        
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
        
            let randomX;
            let randomY;

            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * radius;
    
            randomX = Math.floor(centerX + Math.cos(angle) * distance - boxSize / 2);
            randomY = Math.floor(centerY + Math.sin(angle) * distance - boxSize / 2);

            if (selectedLevel === "hard") {
                randomX = Math.floor(Math.random() * (window.innerWidth - boxSize));
                randomY = Math.floor(Math.random() * (window.innerHeight - boxSize));
            }

            box.style.width = boxSize + "px";
            box.style.height = boxSize + "px";

            if (randomX < 0) randomX = 0;
            if (randomY < 0) randomY = 0;
            if (randomX > window.innerWidth - boxSize) randomX = window.innerWidth - boxSize;
            if (randomY > window.innerHeight - boxSize) randomY = window.innerHeight - boxSize;
        
            box.style.left = randomX + "px";
            box.style.top = randomY + "px";
        }

        async function timer() {
            clearInterval(timerId);

            timeForClick = timerTime;
            timerId = setInterval(function () {
                timeForClick--;
                document.getElementById("time").textContent = timeForClick;

                if (timeForClick == 0) {
                    gameOver();
                }
            }, 1000);
        }

        function gameManager() {
            document.getElementById("score").textContent = score;
            document.getElementById("time").textContent = timerTime;
        }

        function gameOver() {
            alert("Game over, score: " + score + '\n' + "reload the page to start a new game");
            gameMode = false;
            clearInterval(timerId);
        }
    }
)();