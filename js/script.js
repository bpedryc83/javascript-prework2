let playerResult = 0;
let computerResult = 0;

function playGame(playerInput){
    clearMessages();    
    
    function getMoveName(argMoveId){
        console.log('Wykonano funkcję getMoveName');
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
            printMessage('Ty wygrywasz');
            playerResult = playerResult + 1;    
        }
        else if (argComputerMove == argPlayerMove){
            printMessage('Jest remis');    
        }
        else{
            printMessage('Przegrałeś');
            computerResult = computerResult + 1;
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);

    console.log('Wylosowana liczba to: ' + randomNumber);
    printMessage('<span style="color:red; font-weight:bold;">Ruch komputera to: ' + computerMove + '</span>');

    /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */
    let playerMove = getMoveName(playerInput);
    console.log('Gracz wpisał: ' + playerInput);
    printMessage('<span style="color:green; font-weight:bold;">Twój ruch to: ' + playerMove + '</span>');

    displayResult(computerMove, playerMove);
    console.log('argMoveID w funkcji getMoveName przyjęło dla Ciebie wartość: ',playerInput);

    printEndResult(playerResult + ' - ' + computerResult);
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