class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        if(!grid.length || !grid[0].length || !grid) return 0
        let n = grid.length
        let m = grid[0].length

        let visited = Array.from({length:n},()=> Array(m).fill(0))

        let maxArea = 0

        const solve = (i, j) => {
            let value = 1
            if(i<0 || i>=n || j<0 || j >=m || visited[i][j] == 1 || grid[i][j] == 0) return 0

            visited[i][j] = 1
            value += solve(i+1, j)
            value += solve(i-1, j)
            value += solve(i, j+1)
            value += solve(i, j-1)

            console.log({value})
            return value
        }

        for(let i = 0;i<n;i++) {
            for(let j=0;j<m;j++) {
                if( grid[i][j] ==1) {
                    let value = solve(i,j)
                    maxArea = Math.max(maxArea, value)
                }
            }
        }
        return maxArea
    }
}
