

const Game = (() => {
    const gameBoard = Array.from(Array(3), () => new Array(3));
    const gameState = {};
    
    const generateGrid = (x,y) => {
        for (i = 0; i < x; i++){
            let row = document.createElement('div');
            row.classList.add('row');
            for (j = 0; j < y; j++){
                let cell = document.createElement('div');
                cell.classList.add('gridsquare');
                cell.setAttribute('onclick', `Game.playMove(${i},${j})`);
                cell.setAttribute('id',`cell#${i}-${j}`);
                row.appendChild(cell);
            }
            document.getElementById('game-container').appendChild(row)
        } document.getElementById('button').remove();
    };

    const checkGameState = () => {
        Object.values(gameState).forEach(rowSum => {
            if (rowSum === 3 | rowSum === 30){
                console.log('we have a winner!')
            }
        })
    };

    const updateGameBoard = (x,y) => {
        switch(expression) {
            case X:
                gameBoard[x][y] === 'X';
            break;
            case O:
                gameBoard[x][y] === 'O';
            break;
        }
        
    }

    const playMove = (x,y) => {
        let currentMove = document.getElementById(`cell#${x}-${y}`);
        currentMove.classList.add('played');
        currentMove.removeAttribute("onclick"); 
        // console.log(`x: ${x}, y: ${y}`);
        // console.log(currentMove)
    };

    const displayBoard = () => {
        console.log(gameBoard)
    };

    return {
        generateGrid,
        checkGameState,
        playMove,
        displayBoard,
    }
})();
