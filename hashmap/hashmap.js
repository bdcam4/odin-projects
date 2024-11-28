class HashMap {
    constructor(capacity, loadFactor){
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.size = 0;
        this.buckets = new Array(capacity)
    };
    hash(key) {
        let hashCode = 0;
        
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        };
        
        return hashCode;
    };
    resize(){
        this.capacity *= 2;
        const newBuckets = new Array(this.capacity);
        const entries = this.entries();
        this.buckets = newBuckets;

        entries.forEach(item => {
            this.set(item[0],item[1])
        })
    };
    set(key,value){
        
        let index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        };
        
        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        };
        
        bucket.push([key, value]);
        this.size++;

        // Why is everyone else checking for load capacity before setting??
        // i.e. triggering resize at capacity+2
        if (this.length() > this.capacity * this.loadFactor){
            this.resize()
        }
    };
    get(key){
        let index = this.hash(key);
        const bucket = this.buckets[index];
        if (bucket){
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i]
                }
            }
        };
        return null
    };
    contains(key){
        return this.get(key) !== null
    };
    remove(key){
        let index = this.hash(key);
        const bucket = this.buckets[index];
        if (bucket){
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i,1)
                }
            }
        };
        this.size--
    };
    length(){
        let count = 0;
        this.buckets.forEach(bucket => {
            if (bucket){
                bucket.forEach(item => {
                    if (item){
                        count++
                    }
                })
            }
        });
        return count
    };
    clear(){
        // Why is everyone else iterating and clearing each entry individually??
        this.buckets = new Array(this.capacity)
    };
    keys(){
        let keys = [];
        this.buckets.forEach(bucket => {
            if (bucket){
                bucket.forEach(item => {
                    if (item){
                        keys.push(item[0])
                    }
                })
            }
        });
        return keys
    };
    values(){
        let values = [];
        this.buckets.forEach(bucket => {
            if (bucket){
                bucket.forEach(item => {
                    if (item){
                        values.push(item[1])
                    }
                })
            }
        });
        return values
    };
    entries(){
        let entries = [];
        this.buckets.forEach(bucket => {
            if (bucket){
                bucket.forEach(item => {
                    if (item){
                        entries.push(item)
                    }
                })
            }
        });
        return entries
    }
};

export { HashMap }
