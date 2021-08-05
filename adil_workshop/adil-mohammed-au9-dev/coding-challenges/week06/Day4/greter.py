def createStack(): 
	stack = [] 
	return stack 

def isEmpty(stack): 
	return len(stack) == 0

def push(stack, x): 
	stack.append(x) 

def pop(stack): 
	if isEmpty(stack): 
		print("Error : stack underflow") 
	else: 
		return stack.pop() 

def printNGE(arr): 
	s = createStack() 
	element = 0
	next = 0
	push(s, arr[0]) 
	for i in range(1, len(arr), 1): 
		next = arr[i] 
		if isEmpty(s) == False: 
			element = pop(s) 

			'''If the popped element is smaller than next, then 
				a) print the pair 
				b) keep popping while elements are smaller and 
				stack is not empty '''
			while element < next : 
				print(str(element), str(next)) 
				if isEmpty(s) == True : 
					break
				element = pop(s) 

			if element > next: 
				push(s, element) 
		push(s, next) 

	while isEmpty(s) == False: 
			element = pop(s) 
			next = -1
			print(str(element), str(next)) 
arr = [22, 20 , 39, 25, 33, 29, 33] 
printNGE(arr) 

