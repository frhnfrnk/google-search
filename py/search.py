import requests

API_KEY = open("API_KEY").read()
SEARCH_ENGINE_ID = open("SEARCH_ENGINE_ID").read()

def search(query):
    url = "https://www.googleapis.com/customsearch/v1"
    params = {
        "key": API_KEY,
        "cx": SEARCH_ENGINE_ID,
        "q": query,
        # 'searchType': 'image',
        # 'fileType': 'jpg',
        # 'dateRestrict': '2023-01-01:2024-01-01',
        # 'lr': 'lang_en',
        # 'gl': 'us',
    }


    response = requests.get(url, params=params)
    data = response.json()["items"]
    return data

result = search("Python")

for item in result:
    print(item["link"])

