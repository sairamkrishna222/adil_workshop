class Node:
    def __init__(self,val):
        self.val = val
        self.left = None
        self.right = None

def CountLeaves(root):
    if root is None:
        return 0
    if root.left is None and root.right is None:
        return 1
    leftans = CountLeaves(root.left)
    rightans = CountLeaves(root.right)
    return leftans+rightans

root = Node(2)
root.left = Node(7)
root.right = Node(5)
root.left.left = Node(2)
root.left.right = Node(6)
root.left.right.left = Node(5)
root.left.right.right = Node(11)
root.right.right = Node(9)
root.right.right.left = Node(4)
print(CountLeaves(root))