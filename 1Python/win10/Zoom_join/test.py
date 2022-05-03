hr=11
min=10

Class= 0
Class=1 if hr==8 else 2 if hr==9 else 3 if hr==10 and min>30 or hr==11 and min<20 else 4
print(Class)