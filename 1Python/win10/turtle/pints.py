import turtle
from turtle import *
import pyautogui

x=int(input('X: '))
y=int(input('Y: '))
bgcolor('black')
sc = turtle.Screen()
# screensize(1920,100000)
pyautogui.hotkey('win','up')
pen = turtle.Turtle()
pen.speed(0)
pen.pensize(10)

#******************* axes ********
pen.color('white')
pen.right(-90) #go up
pen.forward(1080) #Y
pen.right(180) #go down
pen.forward(2160) #Y'
pen.home() #Origin
pen.forward(2080) #X
pen.right(180) #go left
pen.setx(-1600) #X'
pen.home()
pen.color('red')
pen.forward(x*20)
pen.right(-90)
pen.forward(y*20)



#**************** fibo ***************
# pen.color('black')
# pen.sety(-750)
# pen.color('white')
# pen.dot(40)
# pen.right(-90)
# x=0
# y=1
# z=x+y
# for val in range(1000):
#     pen.forward(z)
#     pen.right(90)
#     pen.forward(100)
#     pen.right(-90)
#     x=y
#     y=z
#     z=x+y

# pen.forward(100)
#*******************************************************************************
sc.exitonclick()
