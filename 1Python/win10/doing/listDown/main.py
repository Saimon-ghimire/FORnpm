import tkinter as tk

root = tk.Tk()

menubar = tk.Menu(root)

filemenu = tk.Menu(menubar,tearoff=0)

filemenu.add_command(label="text 1")
filemenu.add_command(label='text 2', foreground = 'blue')
filemenu.add_command(label='text 3',background='green')

# entire dropdown menu has been given this color
editmenu = tk.Menu(menubar,tearoff=0,foreground = 'green')
editmenu.add_command(label='copy')
editmenu.add_command(label='paste')

menubar.add_cascade(menu=filemenu, label="File")
menubar.add_cascade(menu=editmenu, label="edit")

root.config(menu=menubar)

root.mainloop()