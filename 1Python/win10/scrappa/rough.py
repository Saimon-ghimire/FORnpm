from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
import requests

url='https://wwww.facebook.com'

r=requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
print(r.history)