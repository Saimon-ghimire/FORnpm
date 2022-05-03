import matplotlib.pyplot as plt
fig = plt.figure(1)	#identifies the figure 
plt.title("Fibonacci Series", fontsize='16')	#title

loop=50
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



plt.plot(xC,yC)	#plot the points
plt.xlabel("X",fontsize='13')	#adds a label in the x axis
plt.ylabel("Y",fontsize='13')	#adds a label in the y axis
plt.legend(('YvsX'),loc='best')	#creates a legend to identify the plot
plt.savefig('Y_X.png')	#saves the figure in the present directory
plt.grid()	#shows a grid under the plot
plt.show()


