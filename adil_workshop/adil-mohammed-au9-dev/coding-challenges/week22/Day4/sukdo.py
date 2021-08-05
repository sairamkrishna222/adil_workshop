def validRow(arr, row): 
	x = set() 
	for i in range(0, 9):  
		if arr[row][i] in x: 
			return False
 
		if arr[row][i] != '': 
			x.add(arr[row][i]) 
	
	return True
 
def validCol(arr, col): 
	x = set() 
	for i in range(0, 9): 
		if arr[i][col] in x: 
			return False 
		if arr[i][col] != '': 
			x.add(arr[i][col]) 
	
	return True

def validBox(arr, startRow, startCol): 

	x = set() 

	for row in range(0, 3): 
		for col in range(0, 3): 
			current_num = arr[row + startRow][col + startCol] 
 
			if current_num in x: 
				return False 
			if current_num != '': 
				x.add(current_num) 		
	return True
def isValid(arr, row, col): 

	return (validRow(arr, row) and validCol(arr, col) and
			validBox(arr, row - row % 3, col - col % 3)) 

def allValid(arr, n): 

	for i in range(0, n): 
		for j in range(0, n): 
			if not isValid(arr, i, j): 
				return False
		
	return True
 
if _name_ == "_main_": 

	board = [
            [ '5', '3', '', '', '7', '', '', '', '' ], 
			[ '6', '', '', '1', '9', '5', '', '', '' ], 
			[ '', '9', '8', '', '', '', '', '6', '' ], 
			[ '8', '', '', '', '6', '', '', '', '3' ], 
			[ '4', '', '', '8', '', '3', '', '', '1' ], 
			[ '7', '', '', '', '2', '', '', '', '6' ], 
			[ '', '6', '', '', '', '', '2', '8', '' ], 
			[ '', '', '', '4', '1', '9', '', '', '5' ], 
			[ '', '', '', '', '8', '', '', '7', '9' ]
      ] 
		
	if allValid(board, 9): 
		print("True") 
	else: 
		print("False")