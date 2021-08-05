function TreeNode(val) {
    this.val = val;
    this.left = this.right = null; }
 
var maxDepth = function(root) {
    var basenode = [{ node: root, depth: 1 }];
    var current = basenode.pop();
    var max = 0;

    while (current && current.node) {
        var node = current.node;
        
        // Find all children of this node.
        if (node.left) {
            basenode.push({ node: node.left, depth: current.depth + 1 });
        }
        if (node.right) {
            basenode.push({ node: node.right, depth: current.depth + 1 });
        }
    
        if (current.depth > max) {
            max = current.depth;
        }
        
        current = basenode.pop();
    }

    return max;
};

root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
root.right.left.left = new TreeNode(8);
root.right.left.right = new TreeNode(10);
console.log(maxDepth(root))
