class Heap:
    def __init__(self, heap_arr):
        self.heap_arr = heap_arr

    def findKthLargest(self, heap_arr,k):
        arr = []
        for i in heap_arr:
            if(len(arr)>=k):
                heapq.heappushpop(arr, i)
            else:
                heapq.heappush(arr,i)
        return heapq.heappop(arr)
        arr = res

    

if __name__ == '__main__':
    nums = list(55, 33, 11, 22, 33, 77, 88, 100)
    heap = Heap(heap_arr)
    heap.findKthLargest()
    k = 3
    print(res)