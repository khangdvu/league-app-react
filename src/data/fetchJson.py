import requests, json

url = 'http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/'

f = open('champion.json',"r", encoding='utf-8')
championData = json.load(f)

champions = []
for champion in championData['data']:
    champions.append(champion)


for champion in champions:
    championUrl = url + champion + '.json'
    championData = requests.get(championUrl).json()
    
    with open(champion + '.json', 'x') as file:
        json.dump(championData, file, ensure_ascii=False)

    


