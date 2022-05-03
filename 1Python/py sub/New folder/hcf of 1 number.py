hcf=1
mnum=int(input("a number: "))
process="not finished"
while process=="not finished":
    for val in range(2,(mnum+1)):
        # print("val",val)
        outpt=mnum/val
        # print("outpt",outpt)
        stroutpt=str(outpt)
        # print("stroutpt",stroutpt)
        checklist=stroutpt.split(".")
        # print (checklist[1])
        if outpt==1:
            hcf=hcf*val
            process="finished"
        elif checklist[1]== "0" :
            hcf=hcf*val
        #   print("h                    cf",hcf)
            mnum=int(outpt)
            break
        else:
            continue
print ("THE H.C.F OF GIVEN NUMBER IS: ",hcf)






