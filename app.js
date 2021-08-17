// Scope everything to this variable
const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        // Transiton to game screen
        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    // Play Match
    const playMatch = () =>{
        const options= document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        
        // Reset Animation
        hands.forEach(hand =>{
            hand.addEventListener('animationend',function(){
                this.style.animation='';
            })
        })
        //Computer options
        const computerOptions = ['rock','paper','scissor'];
        options.forEach(options=>{
            options.addEventListener('click',function(){
                console.log(this);
                // The computer choice
                const computerNumber = Math.floor(Math.random() * 3);  // Random 0,1,2
                const computerChoice = computerOptions[computerNumber];

                setTimeout(()=>{
                    compareHands(this.textContent,computerChoice);
                    console.log(computerChoice);
                    // update images
                    playerHand.src=`./assets/${this.textContent}.png`;
                    computerHand.src=`./assets/${computerChoice}.png`;
                },2000)
                // here is wher we call compare hands
                

                //play animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

            });
        });
    };
    const compareHands = (playerChoice,computerChoice)=>{
        //Update Text
        const winner = document.querySelector('.winner');
        
        // Checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent="It is a tie";
            return;
        }
        // Check for rock
        if(playerChoice ==='rock'){
            if(computerChoice === 'scissor'){
                winner.textContent='Player Wins';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent='Computer Wins';
                cScore++
                updateScore();
                return;
            }
        }
        // Check for Paper
        if(playerChoice ==='paper'){
            if(computerChoice === 'scissor'){
                winner.textContent='Computer Wins';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent='Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        // Check for scissors
        if(playerChoice ==='scissor'){
            if(computerChoice === 'rock'){
                winner.textContent='Computer Wins';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent='Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
    }
    // Call all the inner functions
    startGame();
    playMatch();
};

// Start the game function
game();