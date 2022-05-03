# fact=1
# def factorial(n):
#     global fact
#     fact*=n
#     n=n-1
#     if n!=0:
#         factorial(n)
#     return(fact)

# print(factorial(4))

from typing import Counter


# a,b,f=0,1,1
# count=0
# def fibonacci(n):
#     global a,b,f,count
#     print(a)
#     f = a+b
#     a = b
#     b = f
    
#     count+=1
#     if count!=n:
#         fibonacci(n)
# fibonacci(10)

def funnction(n):
    print(n)
    while n>0:
        funnction(n-1)
        n-=1
funnction(10)



    

