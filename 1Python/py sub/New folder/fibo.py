num1=float(0)
num2=float(input('ENTER A NUMBER TO START WITH: '))
limit=int(input('THE LIMIT OF NUMBERS: '))
print('GIVEN BELOW IS THE REQUIRES SERIES:')
print(int(num2),end=" ")
for x in range(limit-1):
    num3=num1+num2
    print(int(num3),end=" ")
    num1=num2
    num2=num3
