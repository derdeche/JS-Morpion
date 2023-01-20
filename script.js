const cells = document.querySelectorAll('[data-cell]');
const gamesStatus = document.getElementById('gameStatus');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne = 'X';const playerTwo= '0';
let playerTurn = playerOne;

cells.forEach(cell =>{
cell.addEventListener('click' , playGame, {once:true});
});

function playGame(e)
{
    e.target.innerHTML = playerTurn;
    updateGameStatus(playerTurn);
    playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne;
}

function updateGameStatus(status)
{
    let statusText;

    switch (status)
    {
        case 'X':
            statusText = "Au tour du joueur 2 (0)";
            break;
        case '0':
            statusText = "Au tour du joueur 1 (X)";
            break;
        case 'winsX':
            statusText = "Le Joueur 1 (X) a gagné !";
            break;
        case 'wins0':
            statusText = "Le joueur 2 (0) a gagné !";
            break;
        case 'draw':
            statusText = "Egalité! Personne ne gagne!";
            break;
    }

    gameStatus.innerHTML = statusText;
    endGameStatus.innerHTML = statusText;

}