print("OPERATION CODE:")
print("X+Y ==== 1")
print("X-Y ==== 2")
print("Y-X ==== 3")
print("X*Y ==== 4")
print("X/Y ==== 5")
print("Y/X ==== 6")
val=0
while val==0:
 print(" ")
 print(" ")
 X=input ("VALUE OF X : ")
 Y=input ("VALUE OF Y : ")
 Z=input ("OERATION CODE : ")
 X= float(X)
 Y= float(Y)
 Z= float(Z)
 
 if Z ==1 :
  ANS= X+Y
 elif Z==2:
  ANS= X-Y
 elif Z==3 :
  ANS=Y-X
 elif Z==4 :
  ANS=X*Y
 elif Z==5 :
  ANS=X/Y
 else :
  ANS=Y/X
 ANS= str (ANS)
 answerlist= ANS.split(".")
 ANS= answerlist[0]
 print ("RESULT -- ", ANS)
 CMD=input ("PRESS 'Y' TO REDO OR ANY OTHER KEY TO CONTINUE ")
 if CMD== "Y" or CMD=="y" :
     continue
 else:
     break
 
print(" ")
print("PROGRAM IS NOW TERMINATED")
print("**THANK YOU**")
 
 

