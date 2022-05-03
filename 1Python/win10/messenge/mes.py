import fbchat
from fbchat import Client
from fbchat.models import *
# username = str(input("Username: "))
client = Client("https://www.facebook.com/login/php",'9803861273', 'nmethyl1phenylpropan2amine')
# no_of_friends = int(input("Number of friends: "))
# for i in range(no_of_friends):
# 	name = str(input("Name: "))
# 	friends = client.searchForUsers(name) # return a list of names
# 	friend = friends[0]
# 	msg = str(input("Message: "))
# 	sent = client.sendMessage(msg, thread_id=friend.uid)
# 	if sent:
# 		print("Message sent successfully!")
