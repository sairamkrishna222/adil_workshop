class Node: 
	def __init__(self, data): 
		self.data = data 
		self.next = None
	
class LinkedList: 
	def __init__(self): 
		self.head = None
	def push(self, data): 
		new_node = Node(data) 
		new_node.next = self.head 
		self.head = new_node 
	def printNthFromLast(self, n): 
		temp = self.head 
		length = 0
		while temp is not None: 
			temp = temp.next
			length += 1

		if n > length: 
			print("Location is greater than the" + "length of LinkedList") 
			return
		temp = self.head 
		for i in range(0, length - n): 
			temp = temp.next
		print(temp.data) 

if __name__ == "__main__":
    pass		 
    llist = LinkedList() 
    llist.push(2) 
    llist.push(4) 
    llist.push(1) 
    llist.push(5)
    llist.push(9)
    llist.printNthFromLast(4) 