//HashMap Project for The Odin Project

//HashMap Factory Function
const HashMapFactory = () => {

    let capacity = 16;
    let buckets = new Array(capacity);
    let loadFactor = 0.75;
    
    //Takes a key and produces a hash code with it
    //(This function was provided by TOP with modification)
    function hash (key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
            //hashCode = hashCode % capacity;
        }

        return hashCode;
    }

    //Use when accessing a bucket through an index:
    //Checks if given index is in bounds, throws an error if not
    function isValidIndex (index) {
        console.log('Checking if this is a valid index...');
        if (index < 0 || index >= buckets.length) {
            //throw new Error("Trying to access index out of bound");
            return false;
        } else {
            return true;
        }
    }

    //Takes two arguments, the first is a key and the second is a value that is
    //assigned to this key. If a key already exists, then the old value is 
    //overwritten or we can say that we update the key’s value.
    function set (key, value) {
        const index = hash(key);
        
        buckets[index] = [key, value];
        // capacity++;
    }

    //Takes one argument as a key and returns the value that is assigned to this 
    //key. If a key is not found, return null.
    function get (key) {
        const index = hash(key);
        console.log(index);

        if (!isValidIndex(index)) {
            console.log('This is not a valid index');
            return false;
        }

        console.log(buckets[index]);
        return buckets[index];
    }

    //Takes a key as an argument and returns true or false based on whether or 
    //not the key is in the hash map.
    function has (key) {

    }

    //Takes a key as an argument. If the given key is in the hash map, it should
    //remove the entry with that key and return true. If the key isn't in the
    //hash map, it should return false.
    function remove (key) {

    }

    //Returns the number of stored keys in the hash map
    function length () {

    }

    //Removes all entries in the hash map
    function clear () {

    }

    //Returns an array containing all the keys inside the hash map
    function keys () {
        let keysArray = [];
        for (let i = 0; i < capacity; i++) {
            if (buckets[i]) {
                keysArray.push(buckets[i][1]);
            }
        }

        console.log(keysArray);
        return keysArray;
    }

    //Returns an array containing all the values
    function values () {
        let valuesArray = [];
        for (let i = 0; i < capacity; i++) {
            if (buckets[i]) {
                valuesArray.push(buckets[i][0]);
            }
        }

        console.log(valuesArray);
        return valuesArray;
    }

    //Returns an array that contains each key, value pair. Example:
    //[[firstKey, firstValue], [secondKey, secondValue]]
    function entries () {

    }

    return {
        hash,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries,
    }
}

const hashMap = HashMapFactory();

hashMap.set('lastname', 'Bobbity');
hashMap.get('lastname');

hashMap.set('firstname', 'Brian');
hashMap.get('firstname');

hashMap.get('poopoo');

hashMap.keys();
hashMap.values();
