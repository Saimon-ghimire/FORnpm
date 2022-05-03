arr=[1,2,3,4,5,6,7,8,9,10]
searchNum=10
def fun(ind):
    if arr[ind]==searchNum:
        print(ind)
    elif arr[ind]>searchNum:
         fun(int(ind/2))
    else:
         fun(int( ((len(arr)-ind)/2)+ind   ))

fun(5)