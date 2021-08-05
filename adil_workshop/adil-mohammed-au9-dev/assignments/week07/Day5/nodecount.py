class Node:
  def __init__(self, data):
    self.data = data
    self.left = None
    self.right = None

def sumOfNodes(root):
    if root == None:
      return 0
    return (root.data + sumOfNodes(root.left) + sumOfNodes(root.right))

if __name__ == '__main__': 
	root = Node(1) 
	root.left = Node(2) 
	root.right = Node(3) 
	root.left.left = Node(4) 
	root.left.right = Node(5) 
	root.right.left = Node(6) 
	root.right.right = Node(7) 
	root.right.left.right = Node(8) 
	sum = sumOfNodes(root)
	print(sum) 

