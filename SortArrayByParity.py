class Solution:
    def sortArrayByParity(self, A):
        """
        :type A: List[int]
        :rtype: List[int]
        """
        arr = []
        n = len(A)
        for i in range(n):
            if(A[i] % 2 != 0):
                arr.append(A[i])
            else:
                arr.insert(0,A[i])
        return arr