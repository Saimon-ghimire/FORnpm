import pyautogui, time


my_dict = {
      'gs':('2472589808',"GSmath"),
      'ms':('9109191266',"msenglish"),
      'rkm':('6928889269',"Phy.RKM"),
      'sko':('9059357243',"sharadkr1"),
      'ps':('3967690028',"maths+2"),
      'so':('3716013892',"sochemgems"),
      #'pc':('4973621871',"pcnepali"),
      'pc':('4973621871',"pcnepali"),

      'jk':('3746777593',"MrK8cw"),
      'br':('6165285134',"class"),
      'akc':('9327968297',"1FJYWy"),
      'joti':('6556718186',"comp12")
}

key=input("Name: ")
pin=my_dict[key][0]
passs=my_dict[key][1]
    
if key=='joti':
      #open google meet
      pyautogui.hotkey('win','d')
      pyautogui.hotkey('ctrl','alt','o')
      time.sleep(3)
      pyautogui.click(750,90,duration=0.2)                              
      pyautogui.typewrite('https://meet.google.com/lookup/c3fogsogca?authuser=0&hs=179')
      time.sleep(1)
      pyautogui.press('enter')
      time.sleep(8)
      pyautogui.hotkey('ctrl','d','e')#mute and turn off camera
      pyautogui.click(1350,800,duration=0.2)#join button

else:
      pyautogui.hotkey('win','d')
      pyautogui.hotkey('ctrl','alt','z')
      time.sleep(5)
      pyautogui.click(750,420,duration=0.2)
      pyautogui.click(750,470,duration=0.2)
      pyautogui.typewrite(pin)
      pyautogui.press('enter')
      time.sleep(5)
      pyautogui.typewrite(passs)
      pyautogui.press('enter')

