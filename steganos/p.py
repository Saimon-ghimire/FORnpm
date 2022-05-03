from typing import BinaryIO
from PIL import Image                                                                                
import cv2, time

def ToBinary(chars):
    ascii=ord(chars)
    bin=format(ascii, 'b')
    if len(bin)<8:
            bin="0"*(8-len(bin))+bin
    return(int(bin))


def textToBinary(to_encode):
    binArray=[]
    for chars in to_encode:
        bin=ToBinary(chars)
        binArray.append(str(bin)[4:])

def newRGB(pixels):
    #pixels type is numpy.ndarray
    #pixels.lsit()
    list=[1,1,1] #eg
    for elem in list:
        bin=ToBinary(elem)
        #bin=12345678





       





img = cv2.imread('apple.jpeg')

f=open('bytes.txt','r+')
to_encode=input('text')
textToBinary(to_encode)

for values in img:
    for pixels in values:
       

        #f.write(str(pixels))


 

