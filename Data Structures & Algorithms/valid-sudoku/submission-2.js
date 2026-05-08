class Solution {


    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
 // Three sets for rows, columns, and 3x3 boxes
    const rows = Array(9).fill().map(() => new Set());
    const cols = Array(9).fill().map(() => new Set());
    const boxes = Array(9).fill().map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];

            if (num === '.') continue;

            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            // If number already exists in row / col / box → invalid
            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }

            // Add the number to respective sets
            rows[i].add(num);
            cols[j].add(num);
            boxes[boxIndex].add(num);
        }
    }

    return true;}
}
