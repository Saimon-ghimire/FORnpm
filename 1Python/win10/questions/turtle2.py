# import turtle

# ninja = turtle.Turtle()

# ninja.speed(1000)


# for i in range(180):
#     ninja.forward(100)
#     ninja.right(30)
#     ninja.forward(20)
#     ninja.left(60)
#     ninja.forward(50)
#     ninja.right(30)

#     ninja.penup()
#     ninja.setposition(0, 0)
#     ninja.pendown()

#     ninja.right(2)

# turtle.done()

from turtle import Turtle, Screen
mr_turtle = Turtle()
screen = Screen()
mr_turtle.speed(0)
for i in range(1800):
    mr_turtle.forward(5000)
    mr_turtle.right(179.9)
screen.exitonclick()