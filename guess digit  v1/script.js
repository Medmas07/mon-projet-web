let randomNumber, maxAttempts, attemptsLeft;
        
        function startGame() {
            document.querySelector('.container').style.background = 'url("images.jpg") no-repeat';
            document.querySelector('.container').style.backgroundSize = 'cover';
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
        function rejouer(){
            document.getElementById("game").style.display = "none";
            document.getElementById("Commencer").style.display = "block";
        }
        function yes(){
            alert('I appreciate it');
        }
        function no(){
            alert('mawsa3 balek');
        }
        function move_button(){
            const button = document.getElementById('movingButton');
            const moveFactor = 30; // Facteur de déplacement
            const padding = 10;  // Padding pour éviter que le bouton soit coupé

            document.addEventListener('mousemove', (e) => {
                const buttonRect = button.getBoundingClientRect();
                const mouseX = e.clientX;
                const mouseY = e.clientY;

                // Calculer la distance entre le curseur et le bouton
                const distX = mouseX - (buttonRect.left + buttonRect.width / 2);
                const distY = mouseY - (buttonRect.top + buttonRect.height / 2);

                // Calculer la nouvelle position
                let newX = buttonRect.left - moveFactor * (distX / Math.abs(distX) || 1);
                let newY = buttonRect.top - moveFactor * (distY / Math.abs(distY) || 1);

                // Limiter les déplacements pour que le bouton ne sorte pas de la fenêtre
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;

                // Empêcher le bouton de dépasser la largeur de la fenêtre
                if (newX < padding) newX = padding;
                if (newX + buttonRect.width > windowWidth - padding) newX = windowWidth - buttonRect.width - padding;

                // Empêcher le bouton de dépasser la hauteur de la fenêtre
                if (newY < padding) newY = padding;
                if (newY + buttonRect.height > windowHeight - padding) newY = windowHeight - buttonRect.height - padding;

                // Appliquer les nouvelles positions du bouton
                button.style.left = newX + 'px';
                button.style.top = newY + 'px';
        });
        }
move_button();
