# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        if not any(lists): 
            return None
        res = []
        
        # Add each element to list
        # this is O(n)
        for lst in lists:
            head = lst
            while(head):
                res.append(head.val)
                head=head.next
                
        # Sort the final list
        # O(n lg n)
        res = sorted(res)
        
        # Create a Linkedlist out
        # of sorted list
        # O(n)
        node = ListNode(res[0])
        head = node
        for i in range(1,len(res)):
            node.next = ListNode(res[i])
            node = node.next
        
        # Final O(n lg n)
        return head