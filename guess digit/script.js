let randomNumber, maxAttempts, attemptsLeft;
        
        function startGame() {
            document.getElementById("userGuess").value = "";
            let difficulty = document.getElementById("difficulty").value;
            if (difficulty === "easy") {
                randomNumber = Math.floor(Math.random() * 10) + 1;
                maxAttempts = 5;
            } else if (difficulty === "medium") {
                randomNumber = Math.floor(Math.random() * 50) + 1;
                maxAttempts = 7;
            } else {
                randomNumber = Math.floor(Math.random() * 100) + 1;
                maxAttempts = 10;
            }
            attemptsLeft = maxAttempts;document.getElementById("message").textContent = "";
            document.getElementById("attempts").textContent = `Tentatives restantes : ${attemptsLeft}`;
            document.getElementById("game").style.display = "block";
            document.getElementById("Commencer").style.display = "none";
        }
        
        function checkGuess() {
            let userGuess = parseInt(document.getElementById("userGuess").value);
            if (isNaN(userGuess)) {
                alert("Veuillez entrer un nombre valide.");
                return;
            }
            attemptsLeft--;
            if (userGuess === randomNumber) {
                alert("Bravo ! Vous avez trouvé le nombre.");
                startGame();
            } else if (attemptsLeft === 0) {
                alert(`Perdu ! Le nombre était ${randomNumber}.`);
                startGame();
            } else {
                document.getElementById("message").textContent = userGuess < randomNumber ? "Trop petit !" : "Trop grand !";
                document.getElementById("attempts").textContent = `Tentatives restantes : ${attemptsLeft}`;
            }
        }
	
