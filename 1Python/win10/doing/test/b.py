from ctypes.wintypes import COLORREF
from tkinter import *
import tkinter.font as font
import join
import tkinter

root = Tk()


root.configure(bg='#212f3d')
root.geometry("650x550")



myFont = font.Font(family="Courier New", size=20)
img = PhotoImage(file="E:/Work/1Python/win10/doing/com.png")# make sure to add "/" not "\"

button = Button(root,
                image=img,              
                borderwidth=0,
                width=500,
                height=500,
                text='RKM',
                compound="top",
                background="#212F3D",
                activebackground="#212F3D",
                foreground='white',
                activeforeground='white',
                command='fonc()'

                # width=60,     #size of button
                # height=100,

                )



def fonc():
    join.join_class_of('RKM')
    



button['font'] = myFont
button.pack()
button.place(x=50, y=50)  # position of button

# Displaying the button

#  button_9 = root(                               bg_color=None,
#                                                 fg_color="#212F3D",
#                                                 border_color="#117A65",
#                                                 hover_color="#34495E",
#                                                 text_font=None,
#                                                 text="PC",
#                                                 text_color="white",
#                                                 corner_radius=12,
#                                                 border_width=4,
#                                                 width=100,
#                                                 height=60,
#                                                 hover=True,)


root.mainloop()
