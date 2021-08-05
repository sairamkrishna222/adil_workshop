"""class solution:
    def middleNode(self,head):
        fast = slow = head
        while fast and fast.next:
            fast = fast.next.next
            slow = fast.next
        return slow
if __name__ == "__main__":
    head = list(map(int,input().split()))"""
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None
def printLinkedList(head):
    cur = head
    while cur != None:
        print(cur.val)
        cur = cur.next
def addElementsToTheEndList(head, x):
    if head is None:
        return Node(x)
    cur = head
    while cur.next != None:
        cur = cur.next
    cur.next = Node(x)
    return head
""" def addElementInMiddle(head, middle_ele, x):
    cur = head
    while cur.val != middle_ele:
        cur = cur.next
    new_node= Node(x)
    new_node.next = cur.next
    cur.next=new_node
    return head """
def findmiddle(head):
    fast=head
    slow=head
    while fast and fast.next:
    #while (q is not None and q.next is not None):
        slow=slow.next
        fast=fast.next.next
    return slow
if __name__ == '__main__':
    head = None
    head=addElementsToTheEndList(head, 55)
    head=addElementsToTheEndList(head, 12)
    head=addElementsToTheEndList(head, 90)
    head=addElementsToTheEndList(head, 77)
    head=addElementsToTheEndList(head, 20)
    print(findmiddle(head))
    

    