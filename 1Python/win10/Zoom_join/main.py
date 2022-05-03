import pyautogui, time, subprocess, cv2
import pandas as pd


file = subprocess.Popen('C:\\Users\\Lenovo\\AppData\\Roaming\\Zoom\\bin\\zoom.exe')
time.sleep(3)

join_btn=pyautogui.locateCenterOnScreen('E:\\Work\\Python\\win 10\\Zoom_join\\join_button.png',confidence=0.5)
print (join_btn)
if join_btn==None:
    print('apple')
#pautogui.moveTo(join_btn)
#pyautogui.click()

#pyautogui.click(750,420,duration=0.2)
