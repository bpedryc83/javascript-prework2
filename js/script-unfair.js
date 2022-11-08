let playerResult = 0;
let playerResultCheckConsole = 0;
let computerResult = 0;
let computerResultCheckConsole = 0;
let oneTimeCheckConsole = 0;
let playerInputCheckConsole = 0;
let drawsCheckConsole = 0;

function playGame(playerInput){
    clearMessages();    
    
    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        } 
        else if (argMoveId == 2){
            return 'papier';
        }
        else if (argMoveId == 3){
            return 'nożyce';
        }
        else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
        }
    }

    function displayResult (argComputerMove, argPlayerMove){
        if((argComputerMove == 'kamień' && argPlayerMove == 'papier') 
        || (argComputerMove == 'papier' && argPlayerMove == 'nożyce')
        || (argComputerMove == 'nożyce' && argPlayerMove == "kamień")){
            if (oneTimeCheckConsole == 1){
            printMessage('Ty wygrywasz');
            playerResult = playerResult + 1;
            }
            else {
                playerResultCheckConsole = playerResultCheckConsole + 1;
            }    
        }
        else if (argComputerMove == argPlayerMove){
            if (oneTimeCheckConsole == 1) {
            printMessage('Jest remis');
            }
            else {
                drawsCheckConsole = drawsCheckConsole + 1;
            }   
                
        }
        else{
            printMessage('Przegrałeś');
            if (oneTimeCheckConsole == 1){
            computerResult = computerResult + 1;
            }
            else {
                computerResultCheckConsole = computerResultCheckConsole + 1;
            }
        }
    }

        let playerMove = getMoveName(playerInput);
        let probability = Math.floor(Math.random() * 100 + 1);
        let randomNumber = Math.floor(Math.random() * 2 + 1);
        let computerInput = 0;

        if (probability < 76) {
            if (playerInput == 1) {
                computerInput = 3;
                }
            else if (playerInput == 2) {
                computerInput = 1;
                }
            else if (playerInput == 3) {
                computerInput = 2;
                }
            }
        else if (probability >= 76 && randomNumber == 1){   
            computerInput = playerInput;
            }
        else if (probability >= 76 && randomNumber == 2) {
            if (playerInput == 1) {
                computerInput = 2;
                }
            else if (playerInput == 2) {
                computerInput = 3;
                }
            else if (playerInput == 3) {
                computerInput = 1
                }
            }
    
        computerMove = getMoveName(computerInput);
        
        displayResult(computerMove, playerMove);

        if (oneTimeCheckConsole == 1){
        printMessage('<span style="color:red; font-weight:bold;">Ruch komputera to: ' + computerMove + '</span>');
        printMessage('<span style="color:green; font-weight:bold;">Twój ruch to: ' + playerMove + '</span>');
        

        printEndResult(playerResult + ' - ' + computerResult);
        }
    }

if (oneTimeCheckConsole == 0){
    for (let i = 0 ; i < 100 ; i++){
        playerInputCheckConsole = Math.floor(Math.random() * 3 + 1);
        playGame(playerInputCheckConsole);       
    }
    console.log('Wynik gracza po 100 rundach: ' + playerResultCheckConsole);
    console.log('Wynik komputera po 100 rundach: ' + computerResultCheckConsole);
    console.log('Remisów po 100 rundach: ' + drawsCheckConsole);
    oneTimeCheckConsole = 1;
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });