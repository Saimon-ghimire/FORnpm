a=2
b=3
import os
while True:
    iter=input("")  
    os.system('clear')
    m=(a+b)/2
    fa=(a*a*a)-2*a-5
    fb=(b*b*b)-2*b-5
    fm=(m*m*m)-2*m-5
    print("a--     "+str(a)+"\n"+"b--     "+str(b)+"\n"+"m--     "+str(m)+"\n"+"f(a)--  "+str(fa)[0:6]+"\n"+"f(b)--  "+str(fb)[0:6]+"\n"+"f(m)--  "+str(fm)[0:6]+"\n")




    if fm>0:
        b=m
    else:
        a=m
 