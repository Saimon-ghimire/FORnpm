import schedule
import time
import webbrowser
import subprocess
import pyautogui

def open_link(link):
    webbrowser.open(link)

def demo_meeting():
    open_link('https://zoom.us/j/4933037444?pwd=a28rbytMQUJRUGxOWUtLNlR1V2NoZz09')

def sleepAndWake():
    subprocess.run(["sudo","rtcwake","-s10", "-mmem"])

def shutdown():
    subprocess.run(["sudo","rtcwake", "-moff"])
    

schedule.every().monday.at("21:43").do(sleepAndWake)
schedule.every().monday.at("21:44").do(demo_meeting)
#schedule.every().monday.at("19:25").do(shutdown)



while 1:
    schedule.run_pending()
    time.sleep(1)
