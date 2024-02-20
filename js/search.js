const fs = require("fs");

const API_KEY = fs.readFileSync("API_KEY", "utf8").trim();
const SEARCH_ENGINE_ID = fs.readFileSync("SEARCH_ENGINE_ID", "utf8").trim();

async function main() {
  let response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=dogs`
  );
  let data = await response.json();
  for (let i = 0; i < data.items.length; i++) {
    console.log(data.items[i].title + ":" + data.items[i].link);
  }
}

main();
