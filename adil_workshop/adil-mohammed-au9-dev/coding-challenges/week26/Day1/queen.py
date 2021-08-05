class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        path, paths = [], []
        self.dfs(n, 0, path, paths)
        print(paths)
        res = self.draw_board(n, paths)
        return res
    
    def dfs(self, n, row, path, paths):
		# path stores all the col index we have chosen from row 0 all the way to the current row (not including current row)
        if row == n:
            paths.append(list(path))
        
        for col in range(n):
            if self.attack(path, row, col):
                continue
            path.append(col)
            self.dfs(n, row+1, path, paths)
            path.pop()
            
    
    def attack(self, path, row, col):
        if col in path:
            return True
        for r, c in enumerate(path):
            if row-col == r-c or row+col == r+c:
                return True
        return False
    
    def draw_board(self, n, paths):
        res = []
        for i in range(len(paths)):
            curr = [['.'] * n for _ in range(n)] 
            for r, c in enumerate(paths[i]):
                curr[r][c] = 'Q'
                
            tmp = []
            for j in range(n):
                tmp.append(''.join(curr[j]))
            
            res.append(tmp)
        return res