import requests, json
import urllib.request



url = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'

f = open('../champion.json',"r", encoding='utf-8')
championData = json.load(f)

champions = []
for champion in championData['data']:
    champions.append(champion)


for champion in champions:
    championUrl = url + champion + '_0.jpg'
    urllib.request.urlretrieve(championUrl, '../../public/loading/' + champion +".jpg")

    


