//HashMap Project for The Odin Project

//HashMap Factory Function
const HashMap = () => {
    
    //Takes a key and produces a hash code with it
    //(This function was provided by TOP)
    function hash (key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    //Use when accessing a bucket through an index:
    //Checks if given index is in bounds, throws an error if not
    function isValidIndex (index) {
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
    }

    //Takes two arguments, the first is a key and the second is a value that is
    //assigned to this key. If a key already exists, then the old value is 
    //overwritten or we can say that we update the key’s value.
    function set (key, value) {

    }

    //Takes one argument as a key and returns the value that is assigned to this 
    //key. If a key is not found, return null.
    function get (key) {

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

    }

    //Returns an array containing all the values
    function values () {

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


