def fibo(loop):
 num1=0
 num2=1
 xCoordinate=3
 xC=[1,2]
 yC=[0,1]
 for x in range (loop-2):
  num3=num1+num2
  num1=num2
  num2=num3
  #print("("+str(xCoordinate)+","+str(num3)+")") #num3 is the y-coordinate
  xC.append(xCoordinate)
  yC.append(num3)
  xCoordinate+=1
 return(xC,yC)
