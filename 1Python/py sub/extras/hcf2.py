hcf=1
mnum=int(input("a number: "))
process="not finished"
while process=="not finished":
    for val in range(2,(x+1)):
        outpt=mnum/val
        if outpt==1:
            hcf=hcf*val
            process="finished"
        elif type(outpt) != float:
            hcf=hcf*val
            x=outpt
        else:
            continue
print ("THE H.C.F OF GIVEN NUMBER IS: ",hcf)
