#DEBUG
dec=int(input("A NUMBER TO CONVERT: "))
divisor=1
binary=""
while divisor!=0:
    fltdiv=dec/2
    intdiv=int(fltdiv)
    rem=dec-(intdiv*2)
    binary=str(rem)+binary
    divisor=intdiv
    dec=intdiv
print("THE BINARY VALUE IS: ",binary)
print("")
print("THANK YOU")
