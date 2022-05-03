# def fibo(loop):
#  num1=0
#  num2=1
#  xCoordinate=3
#  for x in range (loop):
#   num3=num1+num2
#   num1=num2
#   num2=num3
#   print("("+str(xCoordinate)+","+str(num3)+")") #num3 is the y-coordinate
#   xCoordinate+=1
# fibo(1000)


def fibo(loop):
    num1 = 0
    num2 = 1
    xCoordinate = 3
    xC = [1, 2]
    yC = [0, 1]
    for x in range(loop-2):
        num3 = num1+num2
        num1 = num2
        num2 = num3
        xC.append(xCoordinate)
        yC.append(num3)
        xCoordinate += 1
        #print("xC- ", xC)
        #print("yC- ", yC)
    
    for x in range(loop+1):
        print("("+str(xC[x-1])+","+str(yC[x-1])+")") 
       


fibo(500)
