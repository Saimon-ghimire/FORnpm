inpfile=input("THE FILENAME WITH EXTENSION: ")
list=[]
file=open(inpfile, "r+")
for line in file:
    print (line [0], end=" ")
    for x in range (1,(len(line)-1)):
        if x==(len(line)-1):
            try:
                if type(int(line[x]))=="int":
                    print(line[x],end=" ");
                    list.append(x)
            except:
                a=2
        else:
            try:
                if type(int(line[x]))== int and line[x+1]==" " and line [x-1]==" ":
                    print (line[x],end=" ");
                    list.append(x)
            except:
                a=3

start=0
print(" ")
with open("9840423898.srt","a") as newfile:
    file=open(inpfile,"r+")
    for line in file:
        for xes in list:
            end=xes
            newtext=line[start:end]
            number=(newtext[0:1])
            time=(newtext[2:31])
            writing=(newtext[32:])
            newfile.write(number+"\n"+time+"\n"+writing+"\n"+""+"\n")
            start=end

import os
os.system("CHANGE.py")
