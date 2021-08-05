class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
def preOrder(root):
        if root is None:
            return
        else:
            print(root.val)
            preOrder(root.left)
            preOrder(root.right)

def InOrder(root):
        if root is None:
            return
        else:
            InOrder(root.left)
            print(root.val)
            InOrder(root.right)

def postOrder(root):
        if root is None:
            return
        else:
            postOrder(root.left)     
            postOrder(root.right)       
            print(root.val)


if __name__ == "__main__":
    root = Node(2)
    root.left = Node(7)
    root.right = Node(5)
    root.left.left = Node(2)
    root.left.right = Node(6)
    root.left.right.left = Node(5)
    root.left.right.right = Node(11)
    root.right.right = Node(9)
    root.right.right.left = Node(4)
    print("preorder")
    preOrder(root)
    print("INorder")
    InOrder(root)
    print("postorder")
    postOrder(root)

