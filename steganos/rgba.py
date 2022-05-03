import base64

#convert apple to bytes
with open('apple.jpeg', "rb") as f:
    image_binary = f.read()
    base64_encode = base64.b64encode(image_binary)
    byte_decode = base64.decodebytes(base64_encode)
    byte_decode=bytearray(byte_decode)
    
print(type(byte_decode))


#convert bytes to apple + save as apple2
image_result = open('apple2.jpeg', 'wb') # create a writable image and write the decoding result
image_result.write(byte_decode)



#for bytes in text:
textfile=open('bytes.txt','r+')
textfile.truncate(0)
textfile.write(str(byte_decode))
