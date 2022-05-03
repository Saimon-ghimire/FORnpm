import time, pyautogui

def spamText(text, loops, sleep):
    time.sleep(sleep)
    for x in range(loops):
        try : text = text.split()
        except : text = text
        for words in text:
            pyautogui.typewrite(words)
            pyautogui.press('enter')


spamText(["Nikhil"], 30, 1)
