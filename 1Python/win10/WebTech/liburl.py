import urllib.request, urllib.parse, urllib.error, requests

fhand=urllib.request.urlopen('https://academic.oup.com/asj/article/32/4/495/350514')
for line in fhand:
    print(line.decode())
