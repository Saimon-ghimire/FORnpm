# import fbchat
# from fbchat import Client
# user_agentq='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36 OPR/78.0.4093.153'
# clienqt = fbchat.Client('9803861273','nmethyl1phenylpropan2amine',user_agentq)


import requests
url = 'https://facebook.com/login.php'
values = {'username': '9803861273',
          'password': 'nmethyl1phenylpropan2amine'}

r = requests.post(url, data=values)
print(r.content)