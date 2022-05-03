while True:
      iter=input("Name: ")
      if iter=="gs":
          pin="2472589808"
          passs="GSmath"
          break
      elif iter=="ms":
          pin="9109191266"
          passs="msenglish"
          break
      elif iter=="rkm":
          pin="6928889269"
          passs="Phy.RKM"
          break
      elif iter=="sko":
          pin="9059357243"
          passs="sharadkr1"
          break
      elif iter=="ps":
          pin="3967690028"
          passs="maths+2"
          break
      elif iter=="bm":
          pin="4625810851"
          passs="GEMS1428"
          break
      elif iter=="so":
          pin="3716013892"
          passs="sochemgems"
          break
      elif iter=="pc":
          pin="4973621871"
          passs="pcnepali"
          break
      elif iter=="jk":
          pin="3746777593"
          passs="MrK8cw"
          break
      elif iter=="br":
          pin="6165285134"
          passs="class"
          break
      else:
          print("what!?")
          print("Input a correct name you fool!")
          print("\n\n")
          continue
        
    
import pyautogui, time
time.sleep(5)
pyautogui.typewrite(pin)
pyautogui.press("enter")
time.sleep(5)
pyautogui.typewrite(passs)
pyautogui.press("enter")
    




    
    
    