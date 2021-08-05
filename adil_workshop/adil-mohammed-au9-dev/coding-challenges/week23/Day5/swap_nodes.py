# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        if head is None or head.next is None:
            return head
        prev, cur = head, head.next  # prev=1, cur=2, cur.next=3
        prev.next, cur.next = cur.next, prev  # 1->3, 2->1, 2->1->3
        head = cur  # cur=2, head=2, prev=1
        while prev.next and prev.next.next:
            cur, prev, a = prev, prev.next, prev.next.next
            cur.next, prev.next, a.next = a, a.next, prev
        return head
