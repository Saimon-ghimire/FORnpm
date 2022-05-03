def m_code():
    file=open(srtfile,"r+")
    print("Enter the folowing data to subtract: ")
    hr=int(input("Hours: "))
    min=int(input("Minutes: "))
    sec=int(input("Seconds: "))
    adv=sec
    with open("rev_sub_file.srt","a") as newfile:
        file=open(srtfile,"r+")
        for line in file:
            if len(line)>4:
                if line[2]==":":
                    partone=line[0:8]
                    parttwo=line[17:25]
                    time=[partone,parttwo]
                    for part in time:
                        hour=int(part[0:2])
                        minute=int(part[3:5])
                        second=int(part[6:8])
                        if second-adv>-1:
                            second=second-adv
                        else:
                            if adv>60:
                                minsub=int(adv/60)
                            else:
                                minsub=1
                            minute=minute-minsub-min
                            second=60-(adv-second)

                        if minute<0:
                            minute="59"
                            hour=hour-1

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
    print("NOTE: If the result is negative, time decreased is greater than the time in SRT file.")
import os
try:
    srtfile="9840423898.srt"
    m_code()
    os.remove("9840423898.srt")
except:
    srtfile=input("SRT File name: ")
    srtfile='1Python/py sub/subtitles/COMPLETE/'+srtfile
    m_code()

