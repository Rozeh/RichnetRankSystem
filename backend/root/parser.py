import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, parse_qsl, urlencode, urlunparse

import os
## Python이 실행될 때 DJANGO_SETTINGS_MODULE이라는 환경 변수에 현재 프로젝트의 settings.py파일 경로를 등록합니다.
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "root.settings")
## 이제 장고를 가져와 장고 프로젝트를 사용할 수 있도록 환경을 만듭니다.
import django
django.setup()

from rank.models import Rank, Post


search_datas = []
a = Post.objects.values()
count = 0
for i in a:
    post_url = i.get("post_url")
    keyword = i.get("keyword")
    customer = i.get("customer")
    title = i.get("title")
    search_datas.append([keyword, post_url, customer, title])

for keyword, post_url, customer, title in search_datas:
    basic_url='https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&nso=&mode=normal&main_q=&optionType=&view_month=&episode_no=&st_coll=&topic_r_cat='
    parts = urlparse(basic_url)
    qs = dict(parse_qsl(parts.query))
    qs['query']= keyword
    parts = parts._replace(query=urlencode(qs))
    new_url = urlunparse(parts)
    req=requests.get(new_url)
    html=req.text
    soup=BeautifulSoup(html, 'html.parser')
    pkg_list=soup.find_all("a",{"class":"total_tit"})
    data={}
    count=1
    for sub in pkg_list:
        data[count]=sub.get('href')
        count=count+1
    
    search_url = post_url

    for num, url in data.items():
        if url == search_url:
            rank = num
            break
        else :
            rank ="30위 내에 없습니다"

 
        
    print(title, keyword, customer, post_url, rank)
    Rank(title=title, keyword=keyword, customer=customer, post_url=post_url, rank=rank).save()

    

