/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

*/
var numIslands = function (grid) {
  if (!grid) return 0;
  let rows = grid.length - 1;
  let columns = grid[0].length - 1;
  let numOfIslands = 0;
  function dfs(grid, row, column) {
    if (row < 0 || row > rows || column < 0 || column > columns || grid[row][column] !== "1") return;

    grid[row][column] = "0";

    dfs(grid, row - 1, column);
    dfs(grid, row + 1, column);
    dfs(grid, row, column - 1);
    dfs(grid, row, column + 1);
  }
  for (let row = 0; row <= rows; row++) {
    for (let column = 0; column <= columns; column++) {
      if (grid[row][column] === "1") {
        numOfIslands++;
        dfs(grid, row, column);
      }
    }
  }
  return numOfIslands;
};
