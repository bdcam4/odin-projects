class Node {
    constructor(key){
        this.key    = key;
        this.left   = null;
        this.right  = null;
    }
};

class Tree {
    constructor(arr){
        this.root = this.buildTree(arr);
    };
    buildTree(arr){
        return sortedArrayToBSTRecur(arr, 0, arr.length - 1)
    };
    drawTree(node){
        if (!node){
            node = this.root
        };
        prettyPrint(node)
    };
    insert(key, root){
        if (root === undefined){
            root = this.root
        };
        if (root === null)
            return new Node(key);

        if (root.key === key){
            console.log('Key already exists!')
            return root
        };
        if (key < root.key) {
            root.left = this.insert(key, root.left)
        } else if (key > root.key){
            root.right = this.insert(key, root.right)
        };
        return root
    };
    deleteNode(key, root){
        // If root not declared, assume this.root
        if (root === undefined){
            root = this.root
        };

        // Base case
        if (root === null) {
            return root
        };

        // Recursively search subtrees for key
        if (key < root.key) {
            root.left = this.deleteNode(key, root.left);
        } else if (key > root.key){
            root.right = this.deleteNode(key, root.right)
        };

        // Node with only one child or no child
        if (root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left
        };

        // Node with two children
        // Get the inorder successor (smallest in the right subtree)
        let succParent = root;
        let succ = root.right;
        while (succ.left !== null) {
            succParent = succ;
            succ = succ.left
        };

        // Copy the inorder successor's content to target node
        root.key = succ.key;

        // Delete the inorder successor
        if (succParent.left === succ) {
            succParent.left = succ.right;
        } else {
            succParent.right = succ.right
        };
        return root
    };
    find(key){
        return findBSTRecur(key,this.root)
    };
    levelOrder(callback, root){
        if (root === undefined){
            root = this.root
        };

        if (root = null){ 
            return
        };

        let arr = [];

        let queue = [];
        queue.push(this.root);

        while(queue.length > 0){
            const node = queue.shift();

            if (callback){
                callback(node.key)
            };

            arr.push(node.key);

            if (node.left !== null){
                queue.push(node.left)
            };
            if (node.right !== null){
                queue.push(node.right)
            }
        };
        return arr
    };
    inOrder(callback, root, arr){
        if (root === undefined){
            root = this.root
        };

        if (!arr){
            arr = []
        };

        if (root === null){
            return
        };

        this.inOrder(callback, root.left, arr);

        if (callback){
            callback(root.key)
        };

        arr.push(root.key);

        this.inOrder(callback, root.right, arr)

        return arr
    };
    preOrder(callback, root, arr){
        if (root === undefined){
            root = this.root
        };

        if (root === null){
            return
        };

        if (!arr){
            arr = []
        };

        if (callback){
            callback(root.key)
        };

        arr.push(root.key);

        this.preOrder(callback, root.left, arr);
        this.preOrder(callback, root.right, arr);

        return arr
    };
    postOrder(callback, root, arr){
        if (root === undefined){
            root = this.root
        };

        if (root === null){
            return
        };

        if (!arr){
            arr = []
        };
        
        this.postOrder(callback, root.left, arr);
        this.postOrder(callback, root.right, arr);
        
        if (callback){
            callback(root.key)
        };
        arr.push(root.key);

        return arr
    };
    height(root){
        if (root === undefined){
            root = this.root
        };
        if (root === null) {
            return -1
        };

        let lHeight = this.height(root.left);
        let rHeight = this.height(root.right);
        return Math.max(lHeight, rHeight) + 1
    };
    depth(key, root){
        if (root === undefined){
            root = this.root
        };
        
        if (root === null){
            return -1
        };

        let curr = -1;

        if ((root.key == key)|| 
        (curr = this.depth(key, root.left)) >= 0 || 
        (curr = this.depth(key, root.right)) >= 0){
            return curr + 1
        };
        return curr
    };
    isBalanced(){
        let left = this.height(this.root.left);
        let right = this.height(this.root.right);
        return (left === right)
    };
    rebalance(){
        // Do not use this function
        // Self Balancing BST should be used instead

        if (this.isBalanced()){
            console.log('Tree is already balanced. Aborting...');
            return
        };

        let arr = this.inOrder();
        this.root = this.buildTree(arr)
    };
    leftMost(node) {
        let curr = node;
        while (curr.left !== null) {
            curr = curr.left;
        }
        return curr;
    };    
    inOrderSuccessor(target, root) {
        if (root === undefined){
            root = this.root
        };

        // Base Case 1: No Inorder Successor
        if (root === null){
            console.log('base case 1');
            return null
        };
    
        // Base Case 2: root is same as target and 
        // right child is not empty
        if (root.data === target && root.right !== null){
            console.log('base case 2');
            return leftMost(root.right)
        };
    
        // Use BST properties to search for 
        // target and successor
        let succ = null;
        let curr = root;
        while (curr !== null) {
    
            // If curr node is greater, then it
            // is a potential successor
            if (target < curr.key) {
                succ = curr;
                curr = curr.left;
            }
    
            // If smaller, then successor must
            // be in the right child
            else if (target >= curr.key) {
                curr = curr.right;
            }
    
            // If same, the last visited
            // greater value is the successor
            else
                break;
        }
        console.log(`succ: ${succ.key}`);
        return succ;
    }
};

function findBSTRecur(key, root){
    // Recursively search subtrees for key
    if (key < root.key){
        return findBSTRecur(key, root.left)
    } else if (key > root.key){
        return findBSTRecur(key, root.right)
    };

    // return node if matches
    if (root.key === key || root === null){
        return root
    };

    return root
};

function sortedArrayToBSTRecur(arr, start, end){
    if (start > end) return null;

    // Find the middle element
    let mid = start + Math.floor((end - start) / 2);

    // Create root node
    let root = new Node(arr[mid]);

    // Create left subtree
    root.left = sortedArrayToBSTRecur(arr, start, mid - 1);

    // Create right subtree
    root.right = sortedArrayToBSTRecur(arr, mid + 1, end);

    return root
};

function prettyPrint(node, prefix = "", isLeft = true){
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.key}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

export { Tree }
