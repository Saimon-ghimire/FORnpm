def funct(days,amt,total=0):
    for day in range (days):
        total=total+amt
        print(amt,"-- ",total)
        amt*=2
    return(total)

print(funct(30,1))

