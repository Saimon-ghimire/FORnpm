import urllib.request, urllib.error, urllib.parse
import json
serviceurl='https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAgPNgWAl3J4mUhiO-CNZ6-6PrMWoQ8n8w&'
while True:
    address=input('address: ')
    if len(address)<1: break

    url=serviceurl + urllib.parse.urlencode(
        {'address': address})
    
    print('retriving', url)
    uh=urllib.request.urlopen(url)
    data=uh.read().decode()
    print(data)
