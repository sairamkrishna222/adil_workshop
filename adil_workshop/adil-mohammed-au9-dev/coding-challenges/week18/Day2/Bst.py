class TreeNode:
    def _init_(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


global arr
arr = []


def hasSumPath(root, sumTotal):
    if not root:
        return []
    if not root.left or not root.right and root.val == sumTotal:
        return root.val
    arr.append(root.val)
    if hasSumPath(root.left, sumTotal-root.val) == sumTotal-root.val:
        arr.append(root.left.val)
    if hasSumPath(root.right, sumTotal-root.val) == sumTotal - root.val:
        arr.append(root.right.val)
    return arr


# bintree = [5, 4, 8, 11, None, 13, 4, 7, 2, None, None, 5, 1]
myTree = TreeNode(5)
myTree.left = TreeNode(4)
myTree.right = TreeNode(8)
myTree.left.left = TreeNode(11)
myTree.right.left = TreeNode(13)
myTree.right.right = TreeNode(4)
myTree.left.left.left = TreeNode(7)
myTree.left.left.right = TreeNode(2)
myTree.right.right.left = TreeNode(5)
myTree.right.right.right = TreeNode(1)
sum1 = 22

res = hasSumPath(myTree, sum1)
print(res)