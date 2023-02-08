

const Game = (() => {
    // const gameBoard = Array.from(Array(3), () => new Array(3));
    let currentPlayer = 'X'


    const gameBoard = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9']
    ]

    
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

    const updateGameBoard = (x,y) => {
        switch(currentPlayer) {
            case 'X':
                gameBoard[x][y] = 'X';
                currentPlayer = 'O';
            break;
            case 'O':
                gameBoard[x][y] = 'O';
                currentPlayer = 'X';
            break;
        }
        
    }

    const playMove = (x,y) => {
        let currentMove = document.getElementById(`cell#${x}-${y}`);
        currentMove.classList.add('played');
        currentMove.removeAttribute("onclick");
        updateGameBoard(x,y);
    };

    const displayBoard = () => {
        console.log(gameBoard)
    };

    const evaluateAxis = (modifier,x,y) => {
        let currentAxis = [];
        for (i=1; i<=3; i++){
            current = gameBoard[y][x];
            currentAxis.push(current);
            console.log(`i: ${i} @ gameBoard[${y}][${x}]: ${gameBoard[y][x]}`);
            x += modifier[0];
            y += modifier[1];
        }

        console.log(`currentAxis : ${currentAxis}`);
        
        //   for (const n of currentAxis){
        //     if (currentAxis[n] === currentAxis[n-1]) return true
        //   }

    }

    const evaluateBoardState = () => {
        const modifier = {
            'diagonal1': [1,1],
            'diagonal2': [1,-1],
            'row':       [1,0],
            'column':    [0,1]
        };
        evaluateAxis(modifier.row,0,0);
        evaluateAxis(modifier.row,0,1);
        evaluateAxis(modifier.row,0,2);
        // evaluateAxis(modifier.column,0,0);
        // evaluateAxis(modifier.column,1,0);
        // evaluateAxis(modifier.column,2,0);
        // evaluateAxis(modifier.diagonal1,0,0);
        // evaluateAxis(modifier.diagonal2,0,2);
    }

    return {
        generateGrid,
        playMove,
        evaluateBoardState,
        displayBoard,
    }
})();

// Couldn't make this idea work out neatly unfortunately
//
//     const gameState = {
//         'row1': 0,
//         'row2': 0,
//         'row3': 0,
//         'column1': 0,
//         'column2': 0,
//         'column3': 0,
//         'diagonal1': 0,
//         'diagonal2': 0,        
//     };
//
//     const checkGameState = () => {
//             Object.values(gameState).forEach(rowSum => {
//             if (rowSum === 3 | rowSum === 30){
//                 console.log('we have a winner!')
//             }
//         })
//     };
