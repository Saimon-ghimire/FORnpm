a=1
b=2
import os
from gtts import gTTS
while True:
    iter=input("")  
    os.system('clear')
    m=(a+b)/2
    fa=(a*a*a)-a-1
    fb=(b*b*b)-b-1
    fm=(m*m*m)-m-1
    mytext=("a--     "+str(a)+"\n"+"b--     "+str(b)+"\n"+"m--     "+str(m)+"\n"+"f(a)--  "+str(fa)+"\n"+"f(b)--  "+str(fb)+"\n"+"f(m)--  "+str(fm)+"\n")
    
    language='en'
    output=gTTS(text=mytext,lang=language,slow=False)
    output.save("output.mp3")
    os.system("start output.mp3")



    if fm>0:
        b=m
    else:
        a=m
