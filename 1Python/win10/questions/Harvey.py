from gtts import gTTS
import os
import keyboard


def makemp3(my_text):
    output = gTTS(text=my_text, lang=ac, slow=False)
    output.save("output.mp3")


ac = input('accent: ')
opt = input("Enter to loop ")

if opt == "":
    while True:
        text = input("-- ")
        makemp3(text)
        os.system("ffplay output.mp3 -autoexit")
        if keyboard.is_pressed("q"):
            os.system("ffplay output.mp3 -autoexit")
else:
    text = input("-- ")
    makemp3(text)
    command = input("enter to play ")
    if command == "":
        os.system("ffplay output.mp3 -autoexit")


