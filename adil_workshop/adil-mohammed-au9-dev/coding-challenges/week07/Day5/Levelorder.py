class Node:
    def __init__(self, val):
        self.data = val
        self.right = None
        self.left = None
    
def printLevelOrder(root):
    if root is None:
        return root
    queue = []
    return_list = []
    queue.append(root)
    while len(queue) > 0:
        ans = []
        l = len(queue)
        for l in range(l):
            node = queue.pop(0)
            ans.append(node.data)
            if node.left != None:
                queue.append(node.left)
            if node.right != None:
                queue.append(node.right)
        return_list.append(ans)
    return return_list

root = Node(1) 
root.left = Node(2) 
root.right = Node(3) 
root.left.left = Node(4) 
root.left.right = Node(5) 
print(printLevelOrder(root))