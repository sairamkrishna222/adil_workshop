
def printNGE(arr, n): 

	s = list() 

	arr1 = [0 for i in range(n)] 
	for i in range(n - 1, -1, -1):  
		while (len(s) > 0 and s[-1] <= arr[i]): 
			s.pop() 
		if (len(s) == 0): 
			arr1[i] = -1		
		else: 
			arr1[i] = s[-1]	 

		s.append(arr[i]) 
	
	for i in range(n): 
		print(arr[i], " ---> ", arr1[i] ) 


arr = [ 11, 13, 21, 3 ] 
n = len(arr) 
printNGE(arr, n) 

