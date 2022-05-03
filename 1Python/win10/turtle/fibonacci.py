x=0
y=1
z=x+y
for val in range(10):
    print(z)
    x=y
    y=z
    z=x+y
