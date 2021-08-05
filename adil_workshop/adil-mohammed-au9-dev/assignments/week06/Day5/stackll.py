class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
    
class MinStack:
    def __init__(self):
        self.stack = []
    def push(self, x: int) -> None:
        if self.stack:
            self.stack.append((x, min(x, self.getMin())))
        else:
            self.stack.append((x,x))

    def pop(self) -> None:
        if self.stack:
            self.stack.pop()

    def top(self) -> int:
        return self.stack[-1][0] if self.stack else None

    def getMin(self) -> int:
        return self.stack[-1][1] if self.stack else None
if __name__ == "__main__":
    a = MinStack
    a.push = Node(1)
    a.push = Node(5)
    a.push = Node(4)
    a.push = Node(6)
    a.getMin()