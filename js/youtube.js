const fs = require("fs");

const API_KEY = fs.readFileSync("API_KEY", "utf8").trim();

async function search(type, part, query) {
  const url = `https://www.googleapis.com/youtube/v3/${type}`;
  const params = new URLSearchParams({
    part: part,
    key: API_KEY,
    q: query,
    chart: "mostPopular",
  });

  const response = await fetch(`${url}?${params}`);
  const data = await response.json();
  return data.items;
}

async function main() {
  try {
    const result = await search("videos", "statistics", "Python");
    // const result = await search("videos", "snippet", "Python");

    result.forEach((item) => {
      console.log("Link : " + "https://www.youtube.com/watch?v=" + item.id);
      // console.log("Title : " + item.snippet.title);
      console.log("View count: " + item.statistics.viewCount);
      console.log("---------------------------------");
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
