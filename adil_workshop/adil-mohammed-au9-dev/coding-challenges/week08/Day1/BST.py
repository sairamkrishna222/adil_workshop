class Node: 
    def __init__(self,val): 
        self.left = None
        self.right = None
        self.val = val 
 
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
def searchBST(root,val):
    if root == None:
        return root
    if root.val == val:
        return root
    if root.val > val:
        return searchBST(root.left,val)
    elif root.val < val:
        return searchBST(root.right,val)
root = Node(30) 
insert(root, Node(15)) 
insert(root, Node(60)) 
insert(root,Node(7)) 
insert(root,Node(22)) 
insert(root,Node(45)) 
insert(root,Node(75))
insert(root,Node(17))
insert(root,Node(27))
val = 22
if searchBST(root,val):
    print (val, "found")
else:
    print("Not found")                
 