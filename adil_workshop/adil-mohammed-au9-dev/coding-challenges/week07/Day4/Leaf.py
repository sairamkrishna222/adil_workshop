class Node:
    def __init__(self,val):
        self.val = val
        self.left = None
        self.right = None
def Leaf_path(root,cur_path,all_path):
    if root is None:
        return
    if root.left is None and root.right is  None:
        cur_path.append(root.val)
        all_path.append(cur_path[:])
        cur_path.pop()
    cur_path.append(root.val)
    Leaf_path(root.left, cur_path, all_path)
    Leaf_path(root.right, cur_path,all_path)
    cur_path.pop()

root = Node(2)
root.left = Node(7)
root.right = Node(5)
root.left.left = Node(2)
root.left.right = Node(6)
root.left.right.left = Node(5)
root.left.right.right = Node(11)
root.right.right = Node(9)
root.right.right.left = Node(4)
all_path = []
Leaf_path(root,[],all_path)
print(all_path)