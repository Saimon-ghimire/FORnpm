#!/usr/bin/env python3
from datetime import datetime
import webbrowser

routine = {
    'sunday': ('gs','jlsir','dkj','jksir','sko','so'),
    'monday': ('jk','dkj','jlsir','gs','rkm','ms'),
    'tuesday': ('ps','dkj','so','sko','jlsir','jlsir'),
    'wednesday': ('ms','sko','br','pc','rkm','dkj'),
    'thursday': ('ps','sko','rkm','br','pc','ms'),
    'friday': ('ps','rkm','jk','dkj','pc','so')
}

def findPeriodNo(hr,min):
 Class=(
 1 if hr==8 
 else 2 if hr==9 
 else 3 if hr==10 and min>30 or hr==11 and min<20 
 else 4 if hr==11 and min>30 or hr==12 and min<20 
 else 5 if hr==12 and min>40 or hr==13 and min<30 
 else 6 if hr==13 and min>40 or hr==14 and min<30 
 else print('dk which class to join')
 )
 return Class

idInfo = {
    'gs': ('2472589808', "GSmath", "https://bit.ly/ganeshSir"),
    'ms': ('9109191266', "msenglish", "https://bit.ly/madhavSir"),
    'rkm': ('6928889269', "Phy.RKM", "https://bit.ly/RKMsir"),
    'sko': ('9059357243', "sharadkr1", "https://bit.ly/sharadSir"),
    'ps': ('3967690028', "maths+2", "https://bit.ly/prakashSir"),
    'so': ('3716013892', "sochemgems", "https://bit.ly/subarnumSir"),
    'pc': ('4973621871', "pcnepali", "https://bit.ly/premSir"),
    'jk': ('3746777593', "MrK8cw", "https://bit.ly/DrJKsir"),
    'br': ('6165285134', "class", "https://bit.ly/bishalSir"),
    'dkj': ('5475488137', "dkjchem", "https://bit.ly/DKJsir"),
    'jlsir': ('6556718186', "comp12", "https://bit.ly/jlsirMeet")
}


now = datetime.now()

key=routine[now.strftime('%A').lower()][findPeriodNo(int(now.strftime("%H")),int(now.strftime("%M")))]
url = idInfo[key][2]
webbrowser.open(url)






