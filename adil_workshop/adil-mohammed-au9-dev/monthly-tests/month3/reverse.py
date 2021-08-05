def reverse(head):
    prev = None 
    node = head
    while node is not None:
        buf = node.next
        node.next = prev
        prev = node
        node = buf
    head = prev
    return headx