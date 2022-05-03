#input taking
srtfile=input("SRT File name: ")
print("Enter the folowing data to add: ")
hr=int(input("Hours: "))
min=int(input("Minutes: "))
sec=int(input("Seconds: "))
adv=(hr*60*60)+(min*60)+sec
with open("rev_sub_file.srt","a") as newfile:
    file=open(srtfile,"r+")
    for line in file:
        if len(line)>4:
            if line[2]==":":
                #extracting time modules
                partone=line[0:8]
                parttwo=line[17:25]
                time=[partone,parttwo]
                for part in time:
                    #extracting time components
                    hour=int(part[0:2])
                    minute=int(part[3:5])
                    second=int(part[6:8])
                    #block 1 (processing second and(to) minute)
                    if second-adv<0:
                        second=second-adv
                    else:
                        if adv<60:
                            minadd=int(adv/60)
                        else:
                            minadd=1
                        minute=minute-minadd-min
                        second=second-(adv-60)
                    #block 2 (processing hour and(to) minute)
                    if minute==61:
                        minute="00"
                        hour=hour+1
                    #forming new time modules
                    hour="0"+str(hour)
                    if len(str(minute))!=2:
                        minute="0"+str(minute)
                    else:
                        minute=str(minute)

                    if len(str(second))!=2:
                        second="0"+str(second)
                    else:
                        second=str(second)

                    ntime=hour+":"+minute+":"+second
                    line=line.replace(part,ntime) #replacing time modules
                newfile.write(line)
            else:
                newfile.write(line)
        else:
            newfile.write(line)
print("Modification has been done.")
