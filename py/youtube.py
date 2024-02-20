import requests

API_KEY = open("API_KEY").read()
SEARCH_ENGINE_ID = open("SEARCH_ENGINE_ID").read()

def search(type,part,query):
    url = f"https://www.googleapis.com/youtube/v3/{type}"
    params = {
        "part": part,
        "key": API_KEY,
        "q": query,
        "chart": "mostPopular",
    }

    response = requests.get(url, params=params)
    data = response.json()["items"]
    return data

result = search("videos",["statistics", "snippet"],"Python")
# result = search("videos","snippet","Python")

for item in result:
    print("Link : " + "https://www.youtube.com/watch?v=" + item["id"])
    print("Title : " + item["snippet"]["title"])
    print("View count: " + item["statistics"]["viewCount"])
    print("---------------------------------")