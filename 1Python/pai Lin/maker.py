import os
a=0
with open("word1","a") as newfile:
        file=open("no.txt","r+")
        for line in file:
         x=len(line)
         for vl in range(x):
          if line[vl]==" ":
           newfile.write(line[a:vl])
           newfile.write("\n")
           a=vl
