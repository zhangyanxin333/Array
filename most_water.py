class Solution():
    def maxArea(self,height):
        l,r,temp,max_value =  0,len(height)-1,0,0
        while(l < r):
            temp = min(height[l],height[r]) * (r-l)
            max_value = max(temp,max_value)
            if min(height[l],height[r]) == height[l]:
                l+=1
            else:
                r-=1
        return max_value

""" a = Solution()
arr = [1,8,6,2,5,4,8,3,7]
a.maxArea(arr) """