import isEqual from 'lodash.isequal';

class KnightMove {
    constructor(position){
        this.position = position;
        this.prev = null;
        this.adjList = getLegalMoves(position);
    }
};

function knightMoves(start,end){

    const positions = [...start, ...end];
    const illegalMoves = positions.some((e) => e < 0 || e > 7);
    if (illegalMoves) {return "Error: expected [x,y],[x,y]"};

    let queue = [];
    let curr = new KnightMove(start);
    queue.push(curr);

    while (queue.length > 0){

        // remove current node from queue
        curr = queue.shift();

        // break condition
        if (isEqual(curr.position,end)){
            queue = [];
            break;
        };

        // enqueue all legal moves
        curr.adjList.forEach(e => {
            let nextMove = new KnightMove(e);
            nextMove.adjList = nextMove.adjList.filter((e) => e !== curr.position);
            nextMove.prev = curr;
            queue.push(nextMove);
        })
    };

    // do something with the result
    let outputArray = [];
    while (curr !== null){
        outputArray.push(curr.position);
        curr = curr.prev
    };
    return outputArray.reverse();
};

function getLegalMoves(position){

    const [x,y] = position;

    const topLeft   =   [x - 1, y + 2];
    const topRight  =   [x + 1, y + 2];
    const leftTop   =   [x - 2, y + 1];
    const leftBot   =   [x - 2, y - 1];
    const rightTop  =   [x + 2, y + 1];
    const rightBot  =   [x + 2, y - 1];
    const botLeft   =   [x - 1, y - 2];
    const botRight  =   [x + 1, y - 2];

    return [
        topLeft,
        topRight,
        leftTop,
        leftBot,
        rightBot,
        rightTop,
        botLeft,
        botRight
    ].filter(([x,y]) => x >= 0 && x <= 7 && y >= 0 && y <= 7)
};

export { knightMoves }
