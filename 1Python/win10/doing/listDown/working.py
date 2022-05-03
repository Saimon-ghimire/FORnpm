from ctypes.wintypes import COLORREF
from tkinter import *
import tkinter.font as font
import join
import tkinter as tk


root = tk.Tk()
root.geometry("1150x700")
bg = PhotoImage( file = "E:/Work/1Python/win10/doing/listDown/Button.png")

my_label = Label(root, image=bg) #bg image
my_label.place(x=0, y=0, relheight=1, relwidth=1)


key=tk.StringVar
entry = tk.Entry(root, 
                 textvariable=key, 
                 bg='#00151c',   
                 highlightthickness=2,
                 highlightbackground='red'
       
                 )
        
entry.pack()
entry.place(height=80,
            width=250,
            x=455,
            y=430         
            )

#show button and drop down menu
# def show():
#     myLabel = Label(root, text=clicked.get()).pack()
# clicked= StringVar()
# clicked.set('SELECT')

# drop = OptionMenu(root, clicked, "rkm", 'sko','br', 'jyoti')
# drop.pack()
# drop.place(x=440, y=440)
# drop.config(height=4, 
#             width=40,
#             background='#00151c', 
#             activebackground='#00151c', 
#             foreground='white', 
#             activeforeground='white',
#             borderwidth=0 
#             )


# myButton=Button(root, text="show", command=show).pack()
#----------------------------------------------------------------------------


# root.configure(bg='#333333')
# frame = tk.Frame(root)
# frame.pack()

























myFont = font.Font(family="Courier New", size=20)
# img = PhotoImage(file="E:/Work/1Python/win10/doing/com.png") # make sure to add "/" not "\"





# def Class_RKM(): join.join_class_of('rkm')
# def class_SKO(): join.join_class_of('sko')
# def class_UNDEFINED(): join.join_class_of('UNDEFINED')
# def class_SO(): join.join_class_of('so')
# def class_JYOTI(): join.join_class_of('joti')
# def class_PS(): join.join_class_of('ps')
# def class_GS(): join.join_class_of('gs')
# def class_JK(): join.join_class_of('jk')
# def class_MS(): join.join_class_of('ms')
# def class_PC(): join.join_class_of('pc')
# def class_BR(): join.join_class_of('br')
# def class_NEW(): join.join_class_of('new')


# #button specifications
# button_1 = tk.Button(root,
#                      image=img,
#                      borderwidth=0,
#                      width=100,
#                      text='RKM',
#                      compound="top",
#                      background="#333333",
#                      activebackground="#212F3D",
#                      foreground='white',
#                      activeforeground='white',
#                      command=Class_RKM
#                      )

# button_1['font'] = myFont
# button_1.pack()
# button_1.place(relx=0.03, rely=0.05)

# button_2 = tk.Button(root,
#                      image=img,
#                      borderwidth=0,
#                      width=100,
#                      text='SKO',
#                      compound="top",
#                      background="#333333",
#                      activebackground="#212F3D",
#                      foreground='white',
#                      activeforeground='white',
#                      command=class_SKO
#                      )

# button_2['font'] = myFont
# button_2.pack()
# button_2.place(relx=0.286, rely=0.05)

# button_3 = tk.Button(root,
#                      image=img,
#                      borderwidth=0,
#                      width=100,
#                      text='UNDEFINED',
#                      compound="top",
#                      background="#333333",
#                      activebackground="#212F3D",
#                      foreground='white',
#                      activeforeground='white',
#                      command=class_UNDEFINED
#                      )

# button_3['font'] = myFont
# button_3.pack()
# button_3.place(relx=0.543, rely=0.05)

# button_4 = tk.Button(root,
#                      image=img,
#                      borderwidth=0,
#                      width=100,
#                      text='SO',
#                      compound="top",
#                      background="#333333",
#                      activebackground="#212F3D",
#                      foreground='white',
#                      activeforeground='white',
#                      command=class_SO
#                      )

# button_4['font'] = myFont
# button_4.pack()
# button_4.place(relx=0.8, rely=0.05)

# button_5 = tk.Button(root,
#                      image=img,
#                      borderwidth=0,
#                      width=100,
#                      text='MS',
#                      compound="top",
#                      background="#333333",
#                      activebackground="#212F3D",
#                      foreground='white',
#                      activeforeground='white',
#                      command=class_MS
#                      )

# button_5['font'] = myFont
# button_5.pack()
# button_5.place(relx=0.03, rely=0.405)

# button_6 = tk.Button(root,
#                      image=img,
#                      borderwidth=0,
#                      width=100,
#                      text='PC',
#                      compound="top",
#                      background="#333333",
#                      activebackground="#212F3D",
#                      foreground='white',
#                      activeforeground='white',
#                      command=class_PC
#                      )

# button_6['font'] = myFont
# button_6.pack()
# button_6.place(relx=0.286, rely=0.405)

# button_7 = tk.Button(root,
#                      image=img,
#                      borderwidth=0,
#                      width=100,
#                      text='JLB',
#                      compound="top",
#                      background="#333333",
#                      activebackground="#212F3D",
#                      foreground='white',
#                      activeforeground='white',
#                      command=class_JYOTI
#                      )

# button_7['font'] = myFont
# button_7.pack()
# button_7.place(relx=0.543, rely=0.405)

# button_8 = tk.Button(root,
#                      image=img,
#                      borderwidth=0,
#                      width=100,
#                      text='BR',
#                      compound="top",
#                      background="#333333",
#                      activebackground="#212F3D",
#                      foreground='white',
#                      activeforeground='white',
#                      command=class_BR
#                      )

# button_8['font'] = myFont
# button_8.pack()
# button_8.place(relx=0.8, rely=0.405)

# button_9 = tk.Button(root,
#                      image=img,
#                      borderwidth=0,
#                      width=100,
#                      text='PS',
#                      compound="top",
#                      background="#333333",
#                      activebackground="#212F3D",
#                      foreground='white',
#                      activeforeground='white',
#                      command=class_PS
#                      )

# button_9['font'] = myFont
# button_9.pack()
# button_9.place(relx=0.03, rely=0.76)

# button_10 = tk.Button(root,
#                      image=img,
#                      borderwidth=0,
#                      width=100,
#                      text='JK',
#                      compound="top",
#                      background="#333333",
#                      activebackground="#212F3D",
#                      foreground='white',
#                      activeforeground='white',
#                      command=class_JK
#                      )

# button_10['font'] = myFont
# button_10.pack()
# button_10.place(relx=0.286, rely=0.76)

# button_11 = tk.Button(root,
#                      image=img,
#                      borderwidth=0,
#                      width=100,
#                      text='GS',
#                      compound="top",
#                      background="#333333",
#                      activebackground="#212F3D",
#                      foreground='white',
#                      activeforeground='white',
#                      command=class_GS
#                      )

# button_11['font'] = myFont
# button_11.pack()
# button_11.place(relx=0.543, rely=0.76)

# button_12 = tk.Button(root,
#                      image=img,
#                      borderwidth=0,
#                      width=100,
#                      text='NEW CLASS',
#                      compound="top",
#                      background="#333333",
#                      activebackground="#212F3D",
#                      foreground='white',
#                      activeforeground='white',
#                      command=class_NEW
#                      )

# button_12['font'] = myFont
# button_12.pack()
# button_12.place(relx=0.888, rely=0.76)








root.mainloop()
