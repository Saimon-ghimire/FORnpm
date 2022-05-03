import pyautogui
amber=1090+950
sara=800+1100
b=1050+1250
c=1300+1050
def a():
    pyautogui.moveTo(1090,950)
    for x in range(60):
        pyautogui.click()

def b():
    pyautogui.moveTo(800,1100)
    for x in range(60):
        pyautogui.click()

def c():
    pyautogui.moveTo(1050,1250)
    for x in range(60):
        pyautogui.click()

def d():
    pyautogui.moveTo(1300,1050)
    for x in range(60):
        pyautogui.click()

while True:
    x=input(": ")
    if x=="a":
        a()
        pyautogui.click(2550,80)
    elif x=='b':
        b()
        pyautogui.click(2550,80)
    elif x=='c':
        c()
        pyautogui.click(2550,80)
    elif x=='d':
        d()
        pyautogui.click(2550,80)
    else:
        break
    







