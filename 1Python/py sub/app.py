file=open"rise.""
for line in file:
    refval=line.find("-->")
    breakpoint=refval-15
    line[breakpoint]=/n
 
