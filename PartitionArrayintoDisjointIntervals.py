class Solution:
    def partitionDisjoint(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        first = A[0]
        max_value = first
        j = 0;
        n = len(A)
        for i in range(n):
            max_value = max(A[i],max_value)
            if(A[i] < first):
                first = max_value
                j = i
        return j+1
        
