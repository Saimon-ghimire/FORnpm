import tkinter
import tkinter.messagebox
import os
#import sys
import join
from distutils.version import StrictVersion as Version
from tkinter_custom_button import TkinterCustomButton

MAIN_PATH = os.path.dirname(__file__)

APP_NAME = "Join a zoom class"
ABOUT_TEXT = "Simple Test-App"
WIDTH = 600
HEIGHT = 400

class App(tkinter.Tk):
        def __init__(self, *args, **kwargs):
            # if sys.platform !== "darwin":  # macOS
            #     if Version(tkinter.Tcl().call("info", "patchlevel")) >= Version("8.6.9"):  # Tcl/Tk >= 8.6.9
            #         # turn on dark mode for all apps
            #         os.system("defaults write -g NSRequiresAquaSystemAppearance -bool No")
            #         # Currently this works only with anaconda python version (python.org Tcl/Tk version is only 8.6.8).

            tkinter.Tk.__init__(self, *args, **kwargs)

            self.minsize(WIDTH, HEIGHT)
            self.resizable(True, True)
            self.title(APP_NAME)
            self.geometry(str(WIDTH) + "x" + str(HEIGHT))

            # self.protocol("WM_DELETE_WINDOW", self.on_closing)
            # self.bind("<Command-q>", self.on_closing)
            # self.bind("<Command-w>", self.on_closing)

            # if sys.platform == "darwin":  # macOS
            #     self.menubar = tkinter.Menu(master=self)
            #     self.app_menu = tkinter.Menu(self.menubar, name='apple')
            #     self.menubar.add_cascade(menu=self.app_menu)

            #     self.app_menu.add_command(
            #         label='About ' + APP_NAME, command=self.about_dialog)
            #     self.app_menu.add_separator()

            #     self.config(menu=self.menubar)
            #     self.createcommand('tk::mac::Quit', self.on_closing)

            # ========== slightly rounded corners =============

            self.button_1 = TkinterCustomButton(master=self,
                                                bg_color=None,
                                                fg_color="#212F3D",
                                                border_color="#117A65",
                                                hover_color="#34495E",
                                                text_font=None,
                                                text="SKO",
                                                text_color="white",
                                                corner_radius=12,
                                                border_width=4,
                                                width=100,
                                                height=60,
                                                hover=True,
                                                
                                                command=self.test_SKO)
            self.button_1.place(relx=0.25, rely=0.06, anchor=tkinter.NE)

            self.button_2 = TkinterCustomButton(master=self,
                                                bg_color=None,
                                                fg_color="#212F3D",
                                                border_color="#117A65",
                                                hover_color="#34495E",
                                                text_font=None,
                                                text="RKM",
                                                text_color="white",
                                                corner_radius=12,
                                                border_width=4,
                                                width=100,
                                                height=60,
                                                hover=True,
                                                command=self.test_RKM)
            self.button_2.place(relx=0.5, rely=0.085, anchor=tkinter.CENTER)

            self.button_3 = TkinterCustomButton(master=self,
                                                bg_color=None,
                                                fg_color="#212F3D",
                                                border_color="#117A65",
                                                hover_color="#34495E",
                                                text_font=None,
                                                text="SO",
                                                text_color="white",
                                                corner_radius=12,
                                                border_width=4,
                                                width=100,
                                                height=60,
                                                hover=True,
                                                command=self.test_SO)
            self.button_3.place(relx=0.95, rely=0.06, anchor=tkinter.NE)

            self.button_4 = TkinterCustomButton(master=self,
                                                bg_color=None,
                                                fg_color="#212F3D",
                                                border_color="#117A65",
                                                hover_color="#34495E",
                                                text_font=None,
                                                text="JYOTI",
                                                text_color="white",
                                                corner_radius=12,
                                                border_width=4,
                                                width=100,
                                                height=60,
                                                hover=True,
                                                command=self.test_JYOTI)
            self.button_4.place(relx=0.25, rely=0.30, anchor=tkinter.NE)

            self.button_5 = TkinterCustomButton(master=self,
                                                bg_color=None,
                                                fg_color="#212F3D",
                                                border_color="#117A65",
                                                hover_color="#34495E",
                                                text_font=None,
                                                text="PS",
                                                text_color="white",
                                                corner_radius=12,
                                                border_width=4,
                                                width=100,
                                                height=60,
                                                hover=True,
                                                command=self.test_PS)
            self.button_5.place(relx=0.5, rely=0.330, anchor=tkinter.CENTER)

            self.button_6 = TkinterCustomButton(master=self,
                                                bg_color=None,
                                                fg_color="#212F3D",
                                                border_color="#117A65",
                                                hover_color="#34495E",
                                                text_font=None,
                                                text="GS",
                                                text_color="white",
                                                corner_radius=12,
                                                border_width=4,
                                                width=100,
                                                height=60,
                                                hover=True,
                                                command=self.test_GS)
            self.button_6.place(relx=0.95, rely=0.30, anchor=tkinter.NE)

            self.button_7 = TkinterCustomButton(master=self,
                                                bg_color=None,
                                                fg_color="#212F3D",
                                                border_color="#117A65",
                                                hover_color="#34495E",
                                                text_font=None,
                                                text="JK",
                                                text_color="white",
                                                corner_radius=12,
                                                border_width=4,
                                                width=100,
                                                height=60,
                                                hover=True,
                                                command=self.test_JK)
            self.button_7.place(relx=0.25, rely=0.55, anchor=tkinter.NE)

            self.button_8 = TkinterCustomButton(master=self,
                                                bg_color=None,
                                                fg_color="#212F3D",
                                                border_color="#117A65",
                                                hover_color="#34495E",
                                                text_font=None,
                                                text="MS",
                                                text_color="white",
                                                corner_radius=12,
                                                border_width=4,
                                                width=100,
                                                height=60,
                                                hover=True,
                                                command=self.test_MS)
            self.button_8.place(relx=0.5, rely=0.570, anchor=tkinter.CENTER)

            self.button_9 = TkinterCustomButton(master=self,
                                                bg_color=None,
                                                fg_color="#212F3D",
                                                border_color="#117A65",
                                                hover_color="#34495E",
                                                text_font=None,
                                                text="PC",
                                                text_color="white",
                                                corner_radius=12,
                                                border_width=4,
                                                width=100,
                                                height=60,
                                                hover=True,
                                                command=self.test_PC)
            self.button_9.place(relx=0.95, rely=0.55, anchor=tkinter.NE)

            self.button_10 = TkinterCustomButton(master=self,
                                                 bg_color=None,
                                                 fg_color="#212F3D",
                                                 border_color="#096C25",
                                                 hover_color="#34495E",
                                                 text_font=None,
                                                 text="BR",
                                                 text_color="white",
                                                 corner_radius=12,
                                                 border_width=4,
                                                 width=100,
                                                 height=60,
                                                 hover=True,
                                                 command=self.test_BR)
            self.button_10.place(relx=0.5, rely=0.810, anchor=tkinter.CENTER)

            self.running = False

        def test_SKO(self): join.join_class_of('sko')
        def test_RKM(self): join.join_class_of('rkm')
        def test_SO(self): join.join_class_of('so')
        def test_JYOTI(self): join.join_class_of('joti')
        def test_PS(self): join.join_class_of('ps')
        def test_GS(self): join.join_class_of('gs')
        def test_JK(self): join.join_class_of('jk')
        def test_MS(self): join.join_class_of('ms')
        def test_PC(self): join.join_class_of('pc')
        def test_BR(self): join.join_class_of('br')
     

    

        def on_closing(self, event=0):
            # if sys.platform == "darwin":  # macOS
            #     if Version(tkinter.Tcl().call("info", "patchlevel")) >= Version("8.6.9"):  # Tcl/Tk >= 8.6.9
            #         # turn off dark mode for all apps
            #         os.system(
            #             "defaults delete -g NSRequiresAquaSystemAppearance")

            self.destroy()
            self.running = False
            exit()

        def start(self):
            self.running = True
            self.mainloop()

if __name__ == "__main__":
        app = App()
        app.configure(bg='#29323C')
        app.start()
