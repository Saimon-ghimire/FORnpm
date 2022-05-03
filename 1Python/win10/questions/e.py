import time
n=0
while True:
    n+=1
    print((1+1/n)**n)
    if (n>100000000):
        break
