import requests, json
import urllib.request



url = 'http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/'

f = open('../champion.json',"r", encoding='utf-8')
championData = json.load(f)

champions = []
for champion in championData['data']:
    champions.append(champion)


for champion in champions:
    championUrl = url + champion + '.png'
    urllib.request.urlretrieve(championUrl, '../../public/square/' + champion +".png")

    


