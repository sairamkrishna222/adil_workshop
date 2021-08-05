class Node:
    def __init__ (self,data):
        self.data = data
        self.next = None
class Clone:
    def __init__(self):
        self.head = None


    def RandomList(self,head: 'Node'):
        mapping = dict()
        cur = head
        cloned_list= None 
        prev = None
        while cur !=None:
            n = Node(cur.val)
            mapping[cur] = n
            if cloned_list is None:
                cloned_list = n
                prev = cloned_list
            else:
                prev.next = n
                prev = prev.next
            cur = cur.next
        cur = head
        while cur!=None:
            x = mapping[cur]
            if cur.rondom is not None:
                y = mapping[cur.random]
                x.random = y
            cur = cur.next
        return cloned_list

head = Node(1)
head.next = Node(6)
head.next.next = Node(8)
New_head = Clone(head)

