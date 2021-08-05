class Node: 
	def __init__(self, data): 
		self.data = data 
		self.next = None

def push(head_ref, new_data): 
	new_node = Node(0) 
	new_node.data = new_data 
	new_node.next = (head_ref) 
	(head_ref) = new_node 
	return head_ref 

def deleteKey(head_ref, key): 	
	temp = head_ref 
	prev = None
	while (temp != None and temp.data == key): 
		head_ref = temp.next
		temp = head_ref		  
	
	while (temp != None):  
		while (temp != None and temp.data != key): 
			prev = temp 
			temp = temp.next
		
		if (temp == None): 
			return head_ref 
		prev.next = temp.next
		temp = prev.next
		return head_ref 

def printList(node): 
	while (node != None): 
		print(node.data, end = " ") 
		node = node.next
if __name__=='__main__': 

	head = None
	head = push(head, 7) 
	head = push(head, 2) 
	head = push(head, 3) 
	head = push(head, 2) 
	head = push(head, 8) 
	head = push(head, 1) 
	head = push(head, 2) 
	head = push(head, 2) 

	key = 2
	printList(head) 
	print()
	head = deleteKey(head, key) 
	printList(head) 