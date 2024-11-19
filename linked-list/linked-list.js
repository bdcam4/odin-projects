class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    };
    append(value){
        let node = new Node(value);
        let current;

        if (this.head === null){
            this.head = node
        } else {
            current = this.head;

            while(current.next){
                current = current.next
            };
            current.next = node
        };
        this.size++
    };
    prepend(value){
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++
    };
    count(){
        console.log(this.size);
        return this.size
    };
    first(){
        console.log(this.head);
        return this.head
    };
    last(){
        let current = this.head;
        while(current.next){
            current = current.next
        };
        return current
    };
    pop(){
        let current = this.head;
        let prev = current;
        while(current.next){
            prev = current;
            current = current.next
        };
        prev.next = null;
        this.size--
    };
    atIndex(index){
        if (index < 0 || index >= this.size) return console.log('Invalid index');

        let current = this.head;
        for (let i=1; i<=index; i++){
            current = current.next
        };
        return current
    };
    contains(value){
        let current = this.head;
        while (current){
            if (current.value === value){
                return true
            };
            current = current.next;
        };
        return false
    };
    find(value){
        let current = this.head;
        let i = 0;
        let results = [];
        while (i < this.size){
            if (current.value === value){
                let result = {index: i, value: current.value};
                results.push(result)
            };
            current = current.next;
            i++
        };
        return results
    };
    toString(){
        let current = this.head;
        let string = '';
        while (current){
            string += `( ${current.value} ) -> `;
            current = current.next;
        };
        string += 'null';
        return string
    };
    insertAt(value, index){
        if (index < 0 || index >= this.size) return console.log('Invalid index');

        let node = new Node(value);
        let current = this.head;
        let prev;
    
        if (index === 0){
            node.next = this.head;
            this.head = node;
        }
        else {
            for (let i=1; i<=index; i++){
                prev = current;
                current = current.next
            };
            node.next = current;
            prev.next = node
        };
        this.size++
    };
    removeAtIndex(index){
        if (index < 0 || index >= this.size) return console.log('Invalid index');
    
        let current = this.head;
        let prev = current;
    
        if (index === 0){
            this.head = current.next
        }
        else {
            let i = 0;
            while(i < index){
                prev = current;
                current = current.next;
                i++
            };
            prev.next = current.next
        };
        this.size--
    }
};

export { LinkedList }
