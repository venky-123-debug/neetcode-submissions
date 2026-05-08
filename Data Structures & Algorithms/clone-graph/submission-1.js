/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;
        const oldToNew = new Map()
        let q = []
        oldToNew.set(node, new Node(node.val))
        q.push(node)
        while(q.length) {
            const current = q.shift()

            for(let nei of current.neighbors) {
                if(!oldToNew.has(nei)) {
                    oldToNew.set(nei, new Node(nei.val))
                    q.push(nei)
                }
                oldToNew.get(current).neighbors.push(oldToNew.get(nei))
            }
        }

        return oldToNew.get(node)
    }

    
}
