class Node: 
    def __init__(self,key): 
        self.left = None
        self.right = None
        self.val = key 
 
inOrder = []
 
def insert(root,node): 
    if root is None: 
        root = node 
    else: 
        if root.val < node.val: 
            if root.right is None: 
                root.right = node 
            else: 
                insert(root.right, node) 
        else: 
            if root.left is None: 
                root.left = node 
            else: 
                insert(root.left, node) 
 
def inorder(root): 
    if root: 
        inorder(root.left) 
        #print(root.val) 
        inOrder.append(root.val)
        inorder(root.right)
 
 
def kThSmallest(k):
    inorder(r)
    print(inOrder[k-1]) 
 
 
 
r = Node(30) 
insert(r,Node(15)) 
insert(r,Node(60)) 
insert(r,Node(7)) 
insert(r,Node(22)) 
insert(r,Node(45)) 
insert(r,Node(75))
insert(r,Node(17))
insert(r,Node(27))
inorder(r)
print(inOrder)
kThSmallest(2)