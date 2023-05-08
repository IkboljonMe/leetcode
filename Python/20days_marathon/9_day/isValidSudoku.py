# LINK: https://leetcode.com/problems/group-anagrams/
# COMPLEXITY: Time complexity: O(1) Space complexity: O(1)
#Explanation:  Since the size of the input board is fixed at 9x9, 
#   the number of iterations in the two loops is constant, which 
#   means the time complexity is constant. Similarly, the size of the 
#   data structures used to keep track of the numbers is also fixed at
#   9x9, which means the space complexity is also constant.
import collections
class Solution:
    def isValidSudoku(self, board):
        cols = collections.defaultdict(set)
        rows = collections.defaultdict(set)
        squares = collections.defaultdict(set)

        for r in range(9):
            for c in range(9):
                if board[r][c] == '.':
                    continue
                if (board[r][c] in rows[r] or 
                    board[r][c] in cols[c]or 
                    board[r][c] in squares[(r//3,c//3)]):
                    return False
                cols[c].add(board[r][c])
                rows[r].add(board[r][c])
                squares[(r//3,c//3)].add(board[r][c])
        return True
