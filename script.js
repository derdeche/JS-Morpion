const cells = document.querySelectorAll('[data-cell]');
const gamesStatus = document.getElementById('game  Status');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne = 'X';const playerTwo= '0';
let playerTurn = playerOne;

cells.forEach(cell =>{
cell.addEventListener('click' , playGame, {once:true});
});

function playGame(e)
{
    e.target.innerHTML = playerTurn;
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
        case 'X':
            statusText = "Au tour du joueur 2 (0)";
            break;
        case 'X':
            statusText = "Au tour du joueur 2 (0)";
            break;
    }
}