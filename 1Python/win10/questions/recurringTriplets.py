def findTriplets(numbers):
    checkMap={}
    for number in numbers:
        if number in checkMap:
         checkMap[number]=checkMap[number]+1
        else:
            checkMap[number]=1
        if checkMap[number]==3:
            print(number)
            break
    
findTriplets([1,2,3,1,2,8,3,8,3,7])