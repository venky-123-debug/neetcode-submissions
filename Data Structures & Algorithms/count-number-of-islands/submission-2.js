class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let n = grid.length
        let m = grid[0].length
        let result = 0

        let visited = Array.from({length:n}, ()=> Array(m).fill(0))

        const solve = (i, j) => {
            if (i < 0 || i >= n || j < 0 || j >= m || visited[i][j] || grid[i][j] !== '1') {
                return
            }
            visited[i][j] = 1
            solve(i-1, j)
            solve(i+1, j)
            solve(i, j-1)
            solve(i, j+1)
        }

        for(let i = 0;i<n;i++) {
            for(let j=0;j<m;j++) {
                if(grid[i][j]== "1" && !visited[i][j]) {
                    result++
                    solve(i,j)
                }
            }
        }
        return result
    }
}
