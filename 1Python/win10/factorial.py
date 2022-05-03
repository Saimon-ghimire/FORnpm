def fac(x):
    out=1
    for y in range(x):
        out=out*(y+1)
    
    return(out)
for x in range (20):
    print(x,fac(x))

# for w in range (500):
#     it=0
#     for x in range(w):
#        if ((x%2)==0):
#           it=it+(1/fac(x))
#     print(it)