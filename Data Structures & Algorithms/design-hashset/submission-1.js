class MyHashSet {
    constructor() {
        this.hashSet = []
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(!this.hashSet.includes(key)) this.hashSet.push(key)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let index = this.hashSet.indexOf(key)
        if(index!=-1) this.hashSet.splice(index, 1)
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.hashSet.includes(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
