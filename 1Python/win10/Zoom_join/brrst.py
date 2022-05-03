while True:
    iter=input("Name: ")
    if iter=="gs":
          pin="2472589808"
          passs="GSmath"
          print(iter+" it is.")
          break
    elif iter=="ms":
          pin="9109191266"
          passs="msenglish"
          print(iter+" it is.")
          break
    elif iter=="rkm":
          pin="6928889269"
          passs="Phy.RKM"
          print(iter+" it is.")
          break
    elif iter=="sko":
          pin="9059357243"
          passs="sharadkr1"
          print(iter+" it is.")
          break
    elif iter=="ps":
          pin="3967690028"
          passs="maths+2"
          print(iter+" it is.")
          break
    elif iter=="bm":
          pin="4625810851"
          passs="GEMS1428"
          print(iter+" it is.")
          break
    elif iter=="so":
          pin="3716013892"
          passs="sochemgems"
          print(iter+" it is.")
          break
    elif iter=="pc":
          pin="4973621871"
          passs="pcnepali"
          print(iter+" it is.")
          break
    elif iter=="jk":
          pin="3746777593"
          passs="MrK8cw"
          print(iter+" it is.")
          break
    elif iter=="br":
          pin="6165285134"
          passs="class"
          print(iter+" it is.")
          break
    elif iter=="dkj":
          pin="3937681797"
          passs="SANDESHGUP"
          print(iter+" it is.")
          break
    elif iter=="joti":
          pin="6556718186"
          passs="comp12"
          print("Jyoti it is.")
          break
    else:
          print("what!?")
          print("Input a correct name you fool!")
          print("\n\n")
          continue


import pyautogui, time, subprocess, cv2
import pandas as pd


file = subprocess.Popen('C:\\Users\\Lenovo\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Zoom\\Zoom.exe')
time.sleep(1)


join_btn=pyautogui.locateCenterOnScreen('E:\\Work\\Python\\win 10\\Zoom_join\\join_button.png')

if join_btn==None:
      pyautogui.click(750,420,duration=0.2)
else:
      pyautogui.moveTo(join_btn)
      pyautogui.click()

time.sleep(2)
pyautogui.typewrite(pin)
pyautogui.press("enter")
time.sleep(2)
pyautogui.typewrite(passs)
