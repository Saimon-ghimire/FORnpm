#!/usr/bin/env python3
import webbrowser
import speech_recognition as sr

r = sr.Recognizer()


def voiceInput():
    with sr.Microphone() as source2:

        print("Speak")

        # listens for the user's input
        audio2 = r.listen(source2)

        try:
            # Using ggogle to recognize audio
            MyText = r.recognize_google(audio2)
            key = MyText.lower()
            print(key, "joining...")
            return(key)
        except:
            print("Couldn't hear")


my_dict = {
    'gs': ('2472589808', "GSmath", "https://us02web.zoom.us/j/2472589808?pwd=WmhwRVhOdVoxc1Qzbm15Mld1bWdhQT09"),
    'ms': ('9109191266', "msenglish", "https://us04web.zoom.us/j/9109191266?pwd=NUZ5U0xiWmRjZ2k3ZHRSMnBxdmNaZz09"),
    'rkm': ('6928889269', "Phy.RKM", "https://us02web.zoom.us/j/6928889269?pwd=aEVqdmJ4UEV4ajFDMUJDcWE4OVFjQT09"),
    'sko': ('9059357243', "sharadkr1", "https://us04web.zoom.us/j/9059357243?pwd=Tlk4WHUrK2JjTDBzVzc5ZmdBUWtVdz09"),
    'ps': ('3967690028', "maths+2", "https://us02web.zoom.us/j/3967690028?pwd=NVIxbkhpMDlLS25ZWjhYTS83Q09jQT09"),
    'so': ('3716013892', "sochemgems", "https://us02web.zoom.us/j/3716013892?pwd=ZUNTbk9obnpJOXFzaDYrM0Z5WDNiQT09"),
    'pc': ('4973621871', "pcnepali", "https://zoom.us/j/4973621871?pwd=eHdWYnZaNkdyK1NDbStTamVrdHpSUT09"),
    'jk': ('3746777593', "MrK8cw", "https://us04web.zoom.us/j/3746777593?pwd=L1cxZkptd1g1Sy9QQmhYSDFqc3hIZz09"),
    'br': ('6165285134', "class", "https://zoom.us/j/6165285134?pwd=VmNqaFFKbDAvQUU2MlpVVTdwWW1FQT09"),
    'dkj': ('5475488137', "dkjchem", "https://zoom.us/j/5475488137?pwd=WWR0V1pkbWl2M2lEYVp3dms4elZ5dz09"),
    'jlsir': ('6556718186', "comp12", "meet.google.com/lookup/c3fogsogca")
}


mode = input("Enter to voice")
if mode == "":
    key=voiceInput()
else:
    key = input("Name: ")

pin = my_dict[key][0]
passs = my_dict[key][1]

url = my_dict[key][2]
webbrowser.open(url)
