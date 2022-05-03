def findDuplicate (nums):
 seen={}
 for num in nums:
  if num in seen:
    return num
  seen[num]=True
print(findDuplicate([3,1,3,4,2]))
