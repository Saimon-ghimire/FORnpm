mainlist=list()
limit=int(input(" HOW MANY NUMBERS DO YOU WANT TO INPUT: "))
if limit <= 0 or "" :
    print("THANK YOU FOR WASTING YOUR TIME HERE..")
else:     
 CNT=1
 for z in range(limit):
  val=int(input("NUMBER "+ str(CNT)+" : "))
  mainlist.append(val)
  CNT=CNT+1
 CNT=1
 mainlist.sort()
 count=0
 while count != (limit-1) :
  if mainlist[count]==mainlist[count+1]:
      print("DUPLICATE NUMBER",CNT,":",mainlist[count])
      CNT=CNT+1
  count=count+1
 if CNT==1 :
     print("NO DUPLICATE NUMBERS FOUND....")
 
