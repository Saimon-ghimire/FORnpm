from tkinter import *
from tkcalendar import Calendar
from datetime import datetime
 
# Create Object
root = Tk()
 
# Set geometry
root.geometry("650x550")


 
# Add Calendar
cal = Calendar(root, selectmode = 'day',
               year = datetime.now().year,
               month = datetime.now().month,
               day = datetime.now().day
               )
 
cal.pack(pady = 20)
 

# Excecute Tkinter
root.mainloop()