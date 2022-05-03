srtfile=input("SRT File name: ")
with open("rev_sub_file.srt","a") as newfile:
    file=open(srtfile,"r+")
    for line in file:
        if len(line)>4:
            if line[2]==":":
                partone=line[0:8]
                parttwo=line[17:25]
                time=[partone,parttwo]
                for part in time:
                    #00:00:02
                    #add 5 seconds

                    hour=int(part[0:2])
                    minute=int(part[3:5])
                    second=int(part[6:8])
                    if second<=54:
                        second=second+5
                    elif second==55:
                        second="00"
                        minute=minute+1
                    elif second==56:
                        second="01"
                        minute=minute+1
                    elif second==57:
                        second="02"
                        minute=minute+1
                    elif second==58:
                        second="03"
                        minute=minute+1
                    else:
                        second="04"
                        minute=minute+1

                    if minute==60:
                        minute="00"
                        hour=hour+1

                    hour="0"+str(hour)
                    if len(str(minute))!=2:
                        minute="0"+str(minute)
                    else:
                        minute=str(minute)

                    if len(str(second))!=2:
                        second="0"+str(second)
                    else:
                        second=str(second)

                    modifiedtime=hour+":"+minute+":"+second
                    line=line.replace(part,modifiedtime)
                newfile.write(line)
            else:
                newfile.write(line)
        else:
            newfile.write(line)
