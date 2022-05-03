
file=open("E:\Work\Python\win 10\coordinates.txt","w")
num=0
while num<100:
    list=[]
    num=num+1
    if num !="":
        for x in range (1,num+1):
            list.append(x)
        



        killed=1
        while not len (list) == 1:
            
            list.pop(killed)
            if killed == len(list)-1:
                killed=0
            elif killed ==len(list):
                killed=1
            else:
                killed=killed+1
        cordinat="("+str(num)+","+str(list[0])+")"+"\n"
        file.write(cordinat)
        print(cordinat)
    else:
        break
