def mtocm(inp):
    return (inp*100)
def cmtomm(inp):
    return(inp*10)
def mmtopm(inp):
    return(inp*100)
inp=int(input("Number: "))
print(mmtopm(cmtomm(mtocm(inp))))



