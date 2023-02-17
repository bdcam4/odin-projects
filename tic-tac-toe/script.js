

const Game = (() => {
    const gameBoard = Array.from(Array(3), () => new Array(3));
    let currentPlayer = 'X'

    const start = () => {
        generateGrid(3,3);
    };

    const restart = () => {
        let gameWrapper = document.getElementById('game-wrapper');
        let newContainer = document.createElement('div');
        let oldContainer = document.getElementById('game-container');
        oldContainer.removeEventListener('click', Game.restart, {capture: true});
        oldContainer.remove();
        newContainer.setAttribute('id','game-container');
        gameWrapper.appendChild(newContainer);
        generateGrid(3,3)
    }

    const generateGrid = (x,y) => {
        for (i = 0; i < y; i++){
            let row = document.createElement('div');
            row.classList.add('row');
            for (j = 0; j < x; j++){
                let cell = document.createElement('div');
                cell.classList.add('gridsquare');
                cell.setAttribute('onclick', `Game.playMove(${i},${j})`);
                cell.setAttribute('id',`cell#${i}-${j}`);
                row.appendChild(cell);
                document.getElementById('game-container').appendChild(row);
            }
        } 
    };

    const playMove = (y,x) => {
        gameBoard[y][x] = `${currentPlayer}`;
        updateDocument(y,x); 
        evaluateBoardState();
        switch(currentPlayer) {
            case 'X':
                currentPlayer = 'O';
            break;
            case 'O':
                currentPlayer = 'X';
            break;
        };
    }

    const updateDocument = (y,x) => {
        let currentMove = document.getElementById(`cell#${y}-${x}`);
        currentMove.classList.add('played');
        currentMove.innerText = `${currentPlayer}`;
        currentMove.removeAttribute("onclick");
    };

    const displayBoard = () => {
        console.log(gameBoard)
    };

    const evaluateAxis = (modifier,y,x) => {
        let currentAxis = [];
        let initialCell = [y,x];
        for (i=1; i<=3; i++){
            currentCell = gameBoard[y][x];
            if (typeof currentCell === 'undefined') {return};
            currentAxis.push(currentCell);
            x += modifier[1];
            y += modifier[0];
        }
        if (currentAxis.every( (value, i, arr) => value === arr[0] )) {
            endGame(modifier,initialCell)
        }
    }

    const evaluateBoardState = () => {
        const modifier = {
            'diagonal1': [1,1],
            'diagonal2': [-1,1],
            'row':       [0,1],
            'column':    [1,0]
        };
        evaluateAxis(modifier.row,0,0)
        evaluateAxis(modifier.row,1,0);
        evaluateAxis(modifier.row,2,0);
        evaluateAxis(modifier.column,0,0);
        evaluateAxis(modifier.column,0,1);
        evaluateAxis(modifier.column,0,2);
        evaluateAxis(modifier.diagonal1,0,0);
        evaluateAxis(modifier.diagonal2,2,0);
    }

    const endGame = (modifier,initialCell) => {
        let x = initialCell[1];
        let y = initialCell[0];
        let allCells = document.getElementsByClassName('gridsquare');
        for (n of allCells) {
            n.removeAttribute('onclick');
            n.classList.add('played')
        };
        for (i=1; i<=3; i++){
            let currentWinningCell = document.getElementById(`cell#${y}-${x}`);
            currentWinningCell.classList.add('win');
            x += modifier[1];
            y += modifier[0];
        };
        document.getElementById('game-container').addEventListener('click', Game.restart, {capture: true});
    }

    return {
        start,
        restart,
        playMove,
    }
})();
