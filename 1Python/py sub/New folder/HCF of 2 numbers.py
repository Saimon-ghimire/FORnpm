hcf=1
num1list=list()
mnum=int(input("a number: "))
process="not finished"
while process=="not finished":
    for val in range(2,(mnum+1)):
        outpt=mnum/val
        stroutpt=str(outpt)
        checklist=stroutpt.split(".")
        if outpt==1:
            num1list.append(val)
            process="finished"
        elif checklist[1]== "0" :
            num1list.append(val)
        else:
            continue
num1list.pop()

hcf=1
num2list=list()
mnum=int(input("another number: "))
process="not finished"
while process=="not finished":
    for val in range(2,(mnum+1)):
        outpt=mnum/val
        stroutpt=str(outpt)
        checklist=stroutpt.split(".")
        if outpt==1:
            num2list.append(val)
            process="finished"
        elif checklist[1]== "0" :
            num2list.append(val)
        else:
            continue
num2list.pop()

set1=set(num1list)
finallist=set1.intersection(num2list)
HCF=max(finallist)
print("The H.C.F of given two numbers is: ",HCF)
