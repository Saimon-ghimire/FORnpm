from turtle import *

from random import randint
speed(0)
bgcolor('black')
x =30
y=0
screensize(1920, 2080)
for x in range(5000):
    if x<10:
        r = randint(0, 255)
        g = randint(0, 255)
        b = randint(0,255)
    
        colormode(255)  
        pencolor(r,g,b) 
        pensize(width=5)

        fd(x)
        rt(90)
        y=y+1
        x=x+10 
    else:
        r = randint(0, 255)
        g = randint(0, 255)
        b = randint(0,255) 
    
        colormode(255)  
        pencolor(r,g,b) 

        fd(x)
        rt(y)
        y=y+0.5
        x=x+10

   






  
