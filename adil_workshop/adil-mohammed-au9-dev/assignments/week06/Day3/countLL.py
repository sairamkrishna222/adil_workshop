class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
class LinkedList:
    def __init__(self):
        self.head = None

    def getCount(self,head):
        count = 0
        curr = head
        while curr is not None:
            curr = curr.next
            count +=1
        print(count)
a = LinkedList()
a.head = Node(2)
a.head.next = Node(43)
a.head.next.next = Node(23)
a.head.next.next.next=Node(24)
a.head.next.next.next.next=Node(54)
a.getCount(a.head)
