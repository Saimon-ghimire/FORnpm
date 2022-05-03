process="not finished"
n=2
x=65
done=""
list=["           "]
word="HelloWorld"
wordlist=[]
for letters in word:
    wordlist.append(letters)
print(wordlist)
while not process=="finished":
    for loop in range(1,n):
        for letter in range (x,123):
             x=x+1
             print (done,chr(letter),end="")
             print(wordlist[0:loop])
             cow=""
             cow=cow.join(wordlist[0:loop])
             print(cow)
             if cow==chr(letter):
                 n=n+1
                 done=done+chr(letter)
                 print("")
                 break

    if n==11:
        process="finished"
